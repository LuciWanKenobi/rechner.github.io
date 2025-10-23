import InputField from "./atoms/InputField";
import Checkbox from "./atoms/Checkbox";
import Dropdown from "./atoms/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import BerichtTable from "./BerichtTable";
import DataTable from "./DataTable";

function App() {
  const [formData, setFormData] = useState({
    woEi: 1,
    woEiSelbst: 1,
    woEiKlima: 1,
    woEiBonusAnwendbar: 1,
    effizienzBonus: false,
    isfp: false,
    investitionskosten: "100000",
    selectedMaßnahme: "Gebäudehülle",
    fördersatz: "0",
    maxFörderfähigeKosten: 0,
    förderfähigeKosten: 0,
    berichtData: 0,
    projektTyp: "Wohngebäude",
    ngf: 100,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [berichtData, setBerichtData] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isShowDataTable, setIsShowDataTable] = useState(false);
  const data = [
    {
      maßnahme: "Gebäudehülle",
      zuschuss: 0.15,
      isfpBonus: 0.05,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0,
      einkommensbonus: 0,
      maxSatz: 0.2,
      maxZuschuss: 30000,
      maxZuschussIsfp: 60000,
      zuschussProQm: 500,
    },
    {
      maßnahme: "Anlagentechnik",
      zuschuss: 0.15,
      isfpBonus: 0.05,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0,
      einkommensbonus: 0,
      maxSatz: 0.2,
      maxZuschuss: 30000,
      maxZuschussIsfp: 60000,
      zuschussProQm: 500,
    },
    {
      maßnahme: "Solarthermische Anlagen",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Biomasseheizungen",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Wärmepumpen",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0.05,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Brennstoffzellenheizung",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Wasserstofffähige Heizung",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Innovative Heizungstechnik",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Errichtung, Umbau, Erweiterung Gebäudenetz",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Gebäudenetzanschluss",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Wärmenetzanschluss",
      zuschuss: 0.3,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0.2,
      einkommensbonus: 0.3,
      maxSatz: 0.7,
      zuschussWE1: 30000,
      zuschussWE2_6: 15000,
      zuschussWE7: 8000,
      zuschussProQm150: 30000,
      zuschussProQm400: 200,
      zuschussProQm1000: 120,
      zuschussProQm1001: 80,
    },
    {
      maßnahme: "Heizungsoptimierung zur Effizienzverbesserung",
      zuschuss: 0.15,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0,
      einkommensbonus: 0,
      maxSatz: 0.2,
      maxZuschuss: 30000,
      maxZuschussIsfp: 60000,
      zuschussProQm: 500,
    },
    {
      maßnahme: "Heizungsoptimierung zur Emissionsminderung",
      zuschuss: 0.5,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0,
      einkommensbonus: 0,
      maxSatz: 0.5,
      maxZuschuss: 30000,
      maxZuschussIsfp: 60000,
      zuschussProQm: 500,
    },
    {
      maßnahme: "Fachplanung un Baubegleitung",
      zuschuss: 0.5,
      isfpBonus: 0,
      effizienzBonus: 0,
      klimageschwindigkeitsBonus: 0,
      einkommensbonus: 0,
      maxSatz: 0.5,
      maxZuschuss: 20000,
      maxZuschussWE1_2: 5000,
      maxZuschussWE3: 2000,
      zuschussProQm: 5,
      zuschussProQmMax: 20000,
    },
  ];
  const maßnahmenOptions = data.map((item) => ({
    label: item.maßnahme,
    value: item.maßnahme,
  }));

  const projektTyp = [
    { label: "Wohngebäude", value: "Wohngebäude" },
    { label: "Gewerbe", value: "Gewerbe" },
  ];

  const handleDropdownChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedMaßnahme: e.target.value,
    }));
    setIsCalculated(false);
    setIsCalculating(true);
  };

  const handleDropdownChange2 = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projektTyp: e.target.value,
    }));
    setIsCalculated(false);
    setIsCalculating(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //Check if the input is a number or the checkbox
    const newValue =
      name === "effizienzBonus" || name === "showDataTable" || name === "isfp" ? e.target.checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    const newValue2 =
      name === "showDataTable" ? e.target.checked : value;
    setIsShowDataTable(newValue2);
    setIsCalculated(false);
    setIsCalculating(true);
  };

  useEffect(() => {
    if (isCalculating) {
      calculate();
      setIsCalculating(false);
    }
    // eslint-disable-next-line
  }, [isCalculating]);

  function calculateFörderfähigeKosten() {
    const selectedData = data.find(
      (item) => item.maßnahme === formData.selectedMaßnahme,
    );

    let calculatedKosten = 0;

    if (selectedData.maxZuschuss && selectedData.maxZuschussIsfp) {
      if (formData.isfp === false) {
        calculatedKosten = selectedData.maxZuschuss * formData.woEi;
      } else if (formData.isfp === true) {
        calculatedKosten = selectedData.maxZuschussIsfp * formData.woEi;
      }
    }

    if (selectedData.zuschussWE1) {
      for (var i = 1; i <= formData.woEi; i++) {
        if (i === 1) {
          calculatedKosten = calculatedKosten + selectedData.zuschussWE1;
        }
        if ((i > 1) & (i <= 6)) {
          calculatedKosten = calculatedKosten + selectedData.zuschussWE2_6;
        }
        if (i > 6) {
          calculatedKosten = calculatedKosten + selectedData.zuschussWE7;
        }
      }
    }

    if (selectedData.maxZuschussWE3) {
      for (var j = 1; j <= formData.woEi; j++) {
        if (j <= 2) {
          calculatedKosten = calculatedKosten + selectedData.maxZuschussWE1_2;
        }
        if (j > 2) {
          calculatedKosten = calculatedKosten + selectedData.maxZuschussWE3;
        }
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      maxFörderfähigeKosten: calculatedKosten,
    }));

    if (formData.investitionskosten < calculatedKosten) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        förderfähigeKosten: formData.investitionskosten,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        förderfähigeKosten: calculatedKosten,
      }));
    }
  }

  function calculateFörderfähigeKostenGewerbe() {
    const selectedData = data.find(
      (item) => item.maßnahme === formData.selectedMaßnahme,
    );

    let calculatedKosten = 0;

    if (selectedData.zuschussProQm) {
      calculatedKosten = selectedData.zuschussProQm * formData.ngf;
      if (
        selectedData.zuschussProQmMax &&
        calculatedKosten > selectedData.zuschussProQmMax
      )
        calculatedKosten = selectedData.zuschussProQmMax;
    }
    if (selectedData.zuschussProQm150) {
      if (formData.ngf > 0) {
        calculatedKosten = selectedData.zuschussProQm150;
      }
      for (var i = 151; i <= 400 && i <= formData.ngf; i++) {
        calculatedKosten = calculatedKosten + selectedData.zuschussProQm400;
      }
      for (i = 401; i <= 1000 && i <= formData.ngf; i++) {
        calculatedKosten = calculatedKosten + selectedData.zuschussProQm1000;
      }
      for (i = 1001; i <= formData.ngf; i++) {
        calculatedKosten = calculatedKosten + selectedData.zuschussProQm1001;
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      maxFörderfähigeKosten: calculatedKosten,
    }));

    if (formData.investitionskosten < calculatedKosten) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        förderfähigeKosten: formData.investitionskosten,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        förderfähigeKosten: calculatedKosten,
      }));
    }
  }

  function calculateFördersatz() {
    const selectedData = data.find(
      (item) => item.maßnahme === formData.selectedMaßnahme,
    );
    var myFördersätze = [];
    for (var i = 1; i <= formData.woEi; i++) {
      let calculatedSatz,
        isfpZuschuss,
        effizienzBonusZuschuss,
        klimageschwindigkeitsBonusZuschuss,
        einkommensbonusZuschuss = 0;
      calculatedSatz = selectedData.zuschuss; // Standardförderung
      if (formData.isfp === true) {
        //iSFP- Förderung
        calculatedSatz = calculatedSatz + selectedData.isfpBonus;
        isfpZuschuss = selectedData.isfpBonus;
      } else {
        isfpZuschuss = 0;
      }
      if (formData.effizienzBonus === true) {
        //Effizienzbonus Wärmepumpe
        calculatedSatz = calculatedSatz + selectedData.effizienzBonus;
        effizienzBonusZuschuss = selectedData.effizienzBonus;
      }
      if (formData.woEiKlima >= i) {
        //Klimageschwindigkeitsbonus
        calculatedSatz =
          calculatedSatz + selectedData.klimageschwindigkeitsBonus;
        klimageschwindigkeitsBonusZuschuss =
          selectedData.klimageschwindigkeitsBonus;
      } else {
        klimageschwindigkeitsBonusZuschuss = 0;
      }
      if (formData.woEiBonusAnwendbar >= i) {
        //Einkommensbonus
        calculatedSatz = calculatedSatz + selectedData.einkommensbonus;
        einkommensbonusZuschuss = selectedData.einkommensbonus;
      }
      if (selectedData.maxSatz < calculatedSatz) {
        calculatedSatz = selectedData.maxSatz;
      }

      var newData = {
        woEi: "Einheit " + i,
        Grundzuschuss: selectedData.zuschuss,
        isfpZuschuss: isfpZuschuss,
        effizienzBonusZuschuss: effizienzBonusZuschuss,
        klimageschwindigkeitsBonusZuschuss: klimageschwindigkeitsBonusZuschuss,
        einkommensbonusZuschuss: einkommensbonusZuschuss,
        maxFördersatz: selectedData.maxSatz,
        calculatedSatz: calculatedSatz,
      };
      myFördersätze.push(newData);
    }
    var summierteFoerdersätze = 0;
    // Calculate the sum of calculatedSatzi
    for (var j = 0; j < myFördersätze.length; j++) {
      summierteFoerdersätze += myFördersätze[j].calculatedSatz;
    }
    // Calculate the average
    var durchschnittlicherFördersatz =
      summierteFoerdersätze / myFördersätze.length;
    setFormData((prevFormData) => ({
      ...prevFormData,
      fördersatz: durchschnittlicherFördersatz,
    }));
    setBerichtData(myFördersätze);
  }

  const calculate = () => {
    validate();
    try {
      if (formData.projektTyp === "Wohngebäude") {
        calculateFörderfähigeKosten();
      } else if (formData.projektTyp === "Gewerbe") {
        calculateFörderfähigeKostenGewerbe();
      }
      calculateFördersatz();
      setIsCalculated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const validate = () => {
    var message = "";
    if (formData.woEi < formData.woEiSelbst) {
      message =
        message +
        "<br>Die Anzahl der selbst bewohnten Wohneinheiten muss kleiner oder gleich als die Gesamtzahl der Wohneinheiten sein";
    }
    if (formData.woEi < formData.woEiKlima) {
      message =
        message +
        "<br>Die Anzahl der klimabonusgeeigneten Wohneinheiten muss kleiner oder gleich als die Gesamtzahl der Wohneinheiten sein";
    }
    if (formData.woEi < formData.woEiBonusAnwendbar) {
      message =
        message +
        "<br>Die Anzahl der einkommensbonusgeeigneten Wohneinheiten muss kleiner oder gleich als die Gesamtzahl der Wohneinheiten sein";
    }
    setErrorMessage(message);
  };

  const saveFormDataAsJson = () => {
    // Convert formData to JSON string
    const formDataJson = JSON.stringify(formData, null, 2);

    // Prompt the user for a file name
    const fileName = window.prompt("Gib einen Dateinamen an");

    if (fileName) {
      // Create a Blob with the JSON data
      const blob = new Blob([formDataJson], { type: "application/json" });

      // Create a link element
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${fileName}.json`;

      // Append the link element to the body and click it to trigger the download
      document.body.appendChild(a);
      a.click();

      // Remove the link element from the body
      document.body.removeChild(a);
    } else {
      console.log("File name not provided. Data not saved.");
    }
  };

  const handleFileUpload = (event) => {
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setFormData(jsonData);
          console.log("Form data loaded from file:", jsonData);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="text-center pt-3">
      <h1 className="text-center pb-3 h1 text-decoration-underline fw-bold">
        Rechner Förderrichtlinie für effiziente Gebäude
      </h1>
      <div className="container mb-5 p-3 border text-start">
        <div className="row align-items-start">
          <div className="col">
            <Dropdown
              label="Projekttyp:"
              options={projektTyp}
              selectedOption={formData.projektTyp}
              onChange={handleDropdownChange2}
              name="maßnahmen"
            />
           [ <Dropdown
              label="Maßnahme:"
              options={maßnahmenOptions}
              selectedOption={formData.selectedMaßnahme}
              onChange={handleDropdownChange}
              name="maßnahmen"
            />]
            <InputField
              label="Investitionskosten: "
              name="investitionskosten"
              value={formData.investitionskosten}
              onChange={handleInputChange}
              type="number"
              min={0}
              einheit="€"
            />

            {formData.projektTyp === "Gewerbe" && (
              <div>
                <InputField
                  label="Nettogrundfläche: "
                  name="ngf"
                  value={formData.ngf}
                  onChange={handleInputChange}
                  type="number"
                  min={0}
                  einheit="m²"
                />
              </div>
            )}

            {formData.selectedMaßnahme === "Wärmepumpen" && (
              <div>
                <Checkbox
                  label="Ist der Effizienzbonus anwendbar? "
                  checked={formData.effizienzBonus}
                  onChange={handleInputChange}
                  name="effizienzBonus"
                />
              </div>
            )}

            <Checkbox
              label="Liegt ein iSFP vor? "
              checked={formData.isfp}
              onChange={handleInputChange}
              name="isfp"
            />

          </div>

          <div className="col">
            <InputField
              label="Anzahl der Objekte (Wohneinheiten / Gewerbe): "
              name="woEi"
              value={formData.woEi}
              onChange={handleInputChange}
              type="number"
              min={1}
            />
            {formData.projektTyp === "Wohngebäude" && (
              <div>
                <InputField
                  label="Anzahl der selbst bewohnten Wohneinheiten: "
                  name="woEiSelbst"
                  value={formData.woEiSelbst}
                  onChange={handleInputChange}
                  type="number"
                  min={0}
                />
              </div>
            )}
            <InputField
              label="Anzahl der WE für welche der Klimageschwindigkeitsbonus gilt: "
              name="woEiKlima"
              value={formData.woEiKlima}
              onChange={handleInputChange}
              type="number"
              min={0}
            />
            <InputField
              label="Für wie viele Wohneinheiten ist der Einkommensbonus anwendbar? "
              name="woEiBonusAnwendbar"
              value={formData.woEiBonusAnwendbar}
              onChange={handleInputChange}
              type="number"
              min={0}
            />
          </div>
        </div>
        <div className="row align-items-center text-center mt-4">
          <div className="col">
            <button
              className={`btn btn-lg ${isCalculated ? "btn-success" : "btn-danger"}`}
              onClick={calculate}
            >
              Berechne
            </button>
          </div>
          <div className="col">
            <p
              className="text-danger fw-bold"
              dangerouslySetInnerHTML={{ __html: errorMessage }}
            ></p>
          </div>
          <div className="col ">
            <button
              className="btn btn-lg btn-primary mb-3"
              onClick={saveFormDataAsJson}
            >
              Eingabe speichern
            </button>
            <InputField
              label="Gespeicherten Fall verwenden: "
              name="Fall"
              onChange={handleFileUpload}
              type="file"
            />
          </div>
        </div>
      </div>
      <div className="container mb-3 text-center border pt-3">
        <h3 className="mb-5 h3 fw-bold text-decoration-underline">
          Zusammenfassung{" "}
        </h3>
        <div className="container text-start ">
          <div className="row">
            <div className="col">
              <p>Projekttyp: {formData.projektTyp}</p>
              <p>Maßnahme: {formData.selectedMaßnahme}</p>
            </div>
            <div className="col">
              {formData.projektTyp === "Wohngebäude" && (
                <div>
                  <p>Anzahl der Wohneinheiten: {formData.woEi}</p>
                  <p>Davon selbst bewohnt: {formData.woEiSelbst}</p>
                  <p>
                    Anzahl der Wohneinheiten, für die der
                    Klimageschwindigkeitsbonus anwendbar ist:{" "}
                    {formData.woEiKlima}
                  </p>
                  <p>
                    Anzahl der Wohneinheiten, für die der Einkommensbonus
                    anwendbar ist: {formData.woEiBonusAnwendbar}
                  </p>
                </div>
              )}
              {formData.projektTyp === "Gewerbe" && (
                <p>Nettogrundfläche: {formData.ngf}m²</p>
              )}
            </div>
            <div className="col">
              {formData.selectedMaßnahme === "Wärmepumpen" && (
                <p>
                  Energieeffizienzbonus anwendbar:{" "}
                  {formData.effizienzBonus ? "Ja" : "Nein"}
                </p>
              )}
              <p>iSFP vorhanden: {formData.isfp ? "Ja" : "Nein"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Investitionskosten: {formData.investitionskosten}€</p>
              <p>
                Maximal förderfähige Kosten: {formData.maxFörderfähigeKosten}€
              </p>
              <p>Förderfähige Kosten: {formData.förderfähigeKosten}€</p>
            </div>
            <div className="col">
              <p>
                Durchschnittlicher Fördersatz:{" "}
                {(formData.fördersatz * 100).toFixed(1)}%
              </p>
            </div>
            <div className="col">
              <p className="fw-bold text-success text-decoration-underline fs-5">
                Zuschuss / Förderung:{" "}
                {(formData.förderfähigeKosten * formData.fördersatz).toFixed(2)}
                €
              </p>
            </div>
          </div>
        </div>

        <BerichtTable data={berichtData} />
      </div>

      <div className="container-sm d-flex justify-content-start mb-4">
        <Checkbox
          label="Zeige Datentabelle? "
          checked={isShowDataTable}
          onChange={handleInputChange}
          name="showDataTable"
        />
      </div>
      {isShowDataTable === true && (
        <DataTable data={data} />
      )}

    </div>
  );
}

export default App;
