"use client";

import { GlobeIcon } from "@heroicons/react/solid";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    stateCode: string;
    name: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const router = useRouter();

  function handleSelectedCountry(option: option) {
    setSelectedCountry(option);
    setSelectedCity(null);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white" />
        <label htmlFor="country">Country</label>
      </div>

      <Select
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />
    </div>
  );
}

export default CityPicker;
