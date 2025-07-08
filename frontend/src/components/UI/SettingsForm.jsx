import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  ComboboxButton,
} from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { fetchCountries } from "../../libs";
import { Transition } from "@headlessui/react";
import useStore from "../../store";
// import Input from "../components/Input";

const SettingsForm = () => {
  const { user, theme, setTheme } = useStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...user },
  });

  const [selectedCountry, setSelectedCountry] = useState({
    country: user?.country,
    currency: user?.currency,
  });

  const [query, setQuery] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountriesList = async () => {
    try {
      const data = await fetchCountries();
      setCountriesData(data);
    } catch (error) {
      console.error("Failed to fetch countries", error);
    }
  };

  useEffect(() => {
    getCountriesList();
  }, []);

  const filteredCountries =
    query === ""
      ? countriesData
      : countriesData.filter((country) =>
          country.country
            .toLowerCase()
            .replace(/\+/g, "")
            .includes(query.toLowerCase().replace(/\+/g, ""))
        );

  const onSubmit = async (values) => {
    console.log("Submitted values:", values);
  };

  const toggleTheme = (val) => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Input
          name="firstname"
          label="First Name"
          placeholder="Doe"
          register={register("firstname", {
            required: "First Name is required!",
          })}
          error={errors.firstname ? errors.firstname.message : ""}
        />
        <Input
          name="lastname"
          label="Last Name"
          placeholder="John"
          register={register("lastname", {
            required: "Last Name is required!",
          })}
          error={errors.lastname ? errors.lastname.message : ""}
        />
      </div>

      <Combobox value={selectedCountry} onChange={setSelectedCountry}>
        <div className="relative mt-1">
          <div className="relative">
            <ComboboxInput
              className="inputStyles"
              displayValue={(country) => country?.country}
              onChange={(e) => setQuery(e.target.value)}
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand className="text-gray-400" />
            </ComboboxButton>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCountries.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700 dark:text-gray-500">
                  Nothing found.
                </div>
              ) : (
                filteredCountries.map((country, index) => (
                  <ComboboxOption
                    key={index}
                    value={country}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-violet-600/20 text-white"
                          : "text-gray-900 dark:text-gray-200"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center gap-2">
                          <img
                            src={country?.flag}
                            alt={country.country}
                            className="w-8 h-5 rounded-sm object-cover"
                          />
                          <span>{country.country}</span>
                        </div>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <BiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </form>
  );
};

export default SettingsForm;

