import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/sonner";

interface FormData {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: number;
  yearBuilt: number;
  location: string;
  propertyType: string;
}

const HousePredictionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    lotSize: 5000,
    yearBuilt: 2000,
    location: '',
    propertyType: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData({
      ...formData,
      [name]: value[0],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // In a full implementation, this would call the backend API
      // For now, we'll mock the behavior with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      toast.success("Prediction request submitted successfully!");
      
      // Normally would redirect to results page with:
      // window.location.href = `/results?data=${JSON.stringify(formData)}`;
      
      // For demo purposes, we'll simulate a successful prediction
      const mockPrice = (formData.sqft * 250) + (formData.bedrooms * 15000) + (formData.bathrooms * 12000);
      localStorage.setItem('predictionResult', JSON.stringify({
        predictedPrice: mockPrice,
        formData
      }));
      
      // Navigate to results
      window.location.href = '/results';
      
    } catch (err) {
      console.error('Error submitting prediction request:', err);
      setError('Failed to submit prediction request. Please try again.');
      toast.error("Failed to get prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">House Price Prediction</h2>
      
      {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="propertyType">Property Type</Label>
            <Select 
              value={formData.propertyType} 
              onValueChange={(value) => handleSelectChange('propertyType', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single_family">Single Family</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="multi_family">Multi Family</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="location">Location/Zip Code</Label>
            <Input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter zip code or city"
            />
          </div>

          <div>
            <Label htmlFor="bedrooms">Bedrooms: {formData.bedrooms}</Label>
            <Slider
              defaultValue={[formData.bedrooms]}
              max={10}
              min={1}
              step={1}
              onValueChange={(value) => handleSliderChange('bedrooms', value)}
              className="py-4"
            />
          </div>

          <div>
            <Label htmlFor="bathrooms">Bathrooms: {formData.bathrooms}</Label>
            <Slider
              defaultValue={[formData.bathrooms]}
              max={7}
              min={1}
              step={0.5}
              onValueChange={(value) => handleSliderChange('bathrooms', value)}
              className="py-4"
            />
          </div>

          <div>
            <Label htmlFor="sqft">Square Footage</Label>
            <Input
              type="number"
              id="sqft"
              name="sqft"
              value={formData.sqft}
              onChange={handleInputChange}
              placeholder="Total square feet"
            />
          </div>

          <div>
            <Label htmlFor="lotSize">Lot Size (sq ft)</Label>
            <Input
              type="number"
              id="lotSize"
              name="lotSize"
              value={formData.lotSize}
              onChange={handleInputChange}
              placeholder="Lot size in square feet"
            />
          </div>

          <div>
            <Label htmlFor="yearBuilt">Year Built</Label>
            <Input
              type="number"
              id="yearBuilt"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleInputChange}
              placeholder="Year built"
              min="1800"
              max={new Date().getFullYear()}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit" className="bg-primary-blue hover:bg-blue-700 w-full md:w-auto" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Get Price Prediction'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HousePredictionForm;
