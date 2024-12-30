from django import forms

class BreastCancerForm(forms.Form):
    radius = forms.FloatField(
        label='Mean Radius',
        min_value=0,
        widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter mean radius'
        }),
    )
    texture = forms.FloatField(
        label='Mean Texture',
        min_value=0,
        widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter mean texture'
        }),
    )
    perimeter = forms.FloatField(
        label='Mean Perimeter',
        min_value=0,
        widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter mean perimeter'
        }),
    )
    area = forms.FloatField(
        label='Mean Area',
        min_value=0,
        widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter mean area'
        }),
    )
    smoothness = forms.FloatField(
        label='Mean Smoothness',
        min_value=0,
        widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter mean smoothness'
        }),
    )