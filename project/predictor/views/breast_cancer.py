from django.shortcuts import render
from predictor.forms import BreastCancerForm
from predictor.services.prediction_service import PredictionService

def breast(request):
    prediction_service = PredictionService()
    value = ''
    
    if request.method == 'POST':
        form = BreastCancerForm(request.POST)
        if form.is_valid():
            value = prediction_service.predict_breast_cancer(
                form.cleaned_data['radius'],
                form.cleaned_data['texture'],
                form.cleaned_data['perimeter'],
                form.cleaned_data['area'],
                form.cleaned_data['smoothness']
            )
    else:
        form = BreastCancerForm()
    
    return render(
        request,
        'breast.html',
        {
            'result': value,
            'title': 'Breast Cancer Prediction',
            'active': 'btn btn-success peach-gradient text-white',
            'breast': True,
            'form': form,
        }
    )