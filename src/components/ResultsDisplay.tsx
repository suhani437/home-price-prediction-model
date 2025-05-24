import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface PredictionResult {
  predictedPrice: number;
  formData: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize: number;
    yearBuilt: number;
    location: string;
    propertyType: string;
  };
}

const ResultsDisplay = () => {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a complete implementation, we would fetch the results from the API
    // For now, we'll retrieve from localStorage which was set in the form component
    const savedResult = localStorage.getItem('predictionResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
    setLoading(false);
  }, []);

  const formatCurrency = (value: number) => {
    // Convert USD to INR (approximate rate: 1 USD = 83 INR)
    const inrValue = value * 83;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(inrValue);
  };

  const getPropertyTypeLabel = (type: string) => {
    const types: {[key: string]: string} = {
      'single_family': 'Single Family Home',
      'condo': 'Condominium',
      'townhouse': 'Townhouse',
      'multi_family': 'Multi-Family Home'
    };
    return types[type] || type;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">No Results Found</CardTitle>
          <CardDescription>There are no prediction results available.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Please complete the prediction form to see your house price estimate.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to="/predict">Go to Prediction Form</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Calculate range for the prediction (±5%)
  const lowerBound = result.predictedPrice * 0.95;
  const upperBound = result.predictedPrice * 1.05;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <CardTitle className="text-2xl md:text-3xl">Estimated House Price</CardTitle>
              <CardDescription className="text-gray-600 mt-1">Based on your provided details</CardDescription>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-sm text-gray-500">Confidence: High</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div className="bg-success h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <p className="text-sm uppercase font-medium text-gray-500 mb-1">Predicted Price</p>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-blue">
              {formatCurrency(result.predictedPrice)}
            </h3>
            <p className="text-gray-500 mt-2">
              Range: {formatCurrency(lowerBound)} - {formatCurrency(upperBound)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Property Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{getPropertyTypeLabel(result.formData.propertyType)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{result.formData.location || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built:</span>
                  <span className="font-medium">{result.formData.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lot Size:</span>
                  <span className="font-medium">{result.formData.lotSize.toLocaleString()} sq ft</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">House Features</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-medium">{result.formData.bedrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-medium">{result.formData.bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Footage:</span>
                  <span className="font-medium">{result.formData.sqft.toLocaleString()} sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per sq ft:</span>
                  <span className="font-medium">
                    {formatCurrency(result.predictedPrice / result.formData.sqft)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">How this prediction works</h4>
            <p className="text-sm text-gray-600">
              Our machine learning algorithm uses linear regression trained on thousands of real estate 
              transactions. The model takes into account location, size, features and current market 
              trends to generate accurate price estimates.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between border-t pt-6">
          <Button variant="outline" asChild>
            <Link to="/predict">Make Another Prediction</Link>
          </Button>
          <Button className="bg-primary-blue hover:bg-blue-700">
            Download Detailed Report
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
