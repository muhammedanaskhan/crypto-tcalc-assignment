import React, { useState } from 'react'
import styles from './Calculator.module.css'
import arrow from '@/assets/images/drop-arrow.svg'
import Image from 'next/image';
import australia from '@/assets/images/australia.svg';

function Calculator() {

    const yearData = [{id: 0, label: "FY 2023-24"}];
    const countryData = [{id: 0, label: "Australia"}];

    const inComeData = [{id: 0, label: "$0 - $18,200"}, 
                        {id: 1, label: "$18,201 - $45,000"}, 
                        {id: 2, label: "$45,001 - $120,000"}, 
                        {id: 3, label: "$120,001 - $180,000"}, 
                        {id: 4, label: "$180,001+"}
                       ];

    const [isYearOpen, setYearOpen] = useState(false);
    const [isCountryOpen, setCountryOpen] = useState(false);
    const [isIncomeOpen, setIncomeOpen] = useState(false);

  const [yearItems, setYearItem] = useState(yearData);
  const [countryItems, setCountryItem] = useState(countryData);
    const [incomeItems, setIncomeItem] = useState(inComeData);

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedIncome, setSelectedIncome] = useState(null);
  
  const toggleYearDropdown = () => setYearOpen(!isYearOpen);
  const toggleCountryDropdown = () => setCountryOpen(!isCountryOpen);
    const toggleIncomeDropdown = () => setIncomeOpen(!isIncomeOpen);
  
  const handleYearClick = (id) => {
    selectedYear == id ? setSelectedYear(null) : setSelectedYear(id);
    setYearOpen(false);
  }

  const handleCountryClick = (id) => {
    selectedCountry == id ? setSelectedCountry(null) : setSelectedCountry(id);
    setCountryOpen(false);
  }

    const handleIncomeClick = (id) => {
        selectedIncome == id ? setSelectedIncome(null) : setSelectedIncome(id);
        setIncomeOpen(false);
    }

    const getTaxRate = () => {
        const selected = selectedIncome;

        if (selected) {

          switch (selected) {
            case "0":
              return "0%"; 
            case "1":
              return "Nil + 19% for each $1 over $18,200"; 
            case "2":
                return "$5,092 + 32.5% for each $1 over $45,000";
            case "3":
                return "$29,467 + 37% for each $1 over $120,000";
            case "4":
                return "$51,667 + 45% for each $1 over $180,000";
            default:
              return "Unknown";
          }
        } else {
          return "Please Select Income Range first..";
        }
      };
  const [purchaseValue, setPurchaseValue] = useState('');

  const handlePurchaseChange = (e) => {
    setPurchaseValue(e.target.value);
  };

  const [saleValue, setSaleValue] = useState('');

  const handleSaleChange = (e) => {
    setSaleValue(e.target.value);
  };

    const [expensesValue, setExpensesValue] = useState('');

    const handleExpensesChange = (e) => {
        setExpensesValue(e.target.value);
    };

    const [investmentType, setInvestmentType] = useState(null);

    const handleInvestmentTypeSelect = (buttonId) => {
        if (investmentType === buttonId) {
            setInvestmentType(null);
        } else {
            setInvestmentType(buttonId); 
        }
    };


    const calculateDiscount = () => {
        const capitalGains = saleValue - purchaseValue - expensesValue;
    
        if (capitalGains > 0) {
          const discount = capitalGains / 2;
          return discount;
        }
    
        return 0;
      };
   
      const calculateCapitalGainsAmount = () => {
        const capitalGainsAmount = saleValue - purchaseValue - expensesValue;
        return capitalGainsAmount;
      };

        const calculateTaxToPay = () => {
            let capitalGainsAmount = calculateCapitalGainsAmount() - calculateDiscount();
     
            switch (selectedIncome) {
                case "0":
                  return 0;
            
                case "1":
                  return (19/100) * capitalGainsAmount;
            
                case "2":
                  return (32.5/100) * capitalGainsAmount;
            
                case "3":
                  return (37/100) * capitalGainsAmount;
            
                case "4":
                    return (45/100) * capitalGainsAmount;
            
                default:
                    return 0;
              }
        }

        console.log(calculateTaxToPay());

  return (
    <div className={styles.calculator}>
          <h1 className={styles.heading}>Free Crypto Tax Calculator Australia</h1>
          <div className={styles.yearAndCountry}>
              <div className={styles.year}>
                  <p>Financial Year</p>
                  <div className={styles.dropdown}>
                      <div className={styles.dropdownHeader} onClick={toggleYearDropdown}>
                          {selectedYear ? yearItems.find(item => item.id == selectedYear).label : "Select Year"}
                          <i className={`fa fa-chevron-right ${styles.icon} ${isYearOpen && styles.open}`}>
                              <Image src={arrow} width={8} height={5} />
                          </i>
                      </div>
                      <div className={`${styles.dropdownBody} ${isYearOpen && styles.open}`}>
                          {yearItems.map(item => (
                              <div className={styles.dropdownItem} onClick={e => handleYearClick(e.target.id)} id={item.id}>
                                  <span className={`${styles.dropdownItemDot} ${item.id == selectedYear && styles.selected}`}>• </span>
                                  {item.label}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <div className={styles.country}>
                  <p>Country</p>
                  <div className={styles.dropdown}>
                      <div className={styles.dropdownHeader} onClick={toggleCountryDropdown}>
                          {selectedCountry ?
                              <div className={styles.selectedCountryDiv}>
                                  <Image src={australia} width={20} height={20} alt='country' />
                                  {countryItems.find(item => item.id == selectedCountry).label}
                              </div>
                              : "Select Country"}
                          <i className={`fa fa-chevron-right ${styles.icon} ${isCountryOpen && styles.open}`}>
                              <Image src={arrow} width={8} height={5} />
                          </i>
                      </div>
                      <div className={`${styles.dropdownBody} ${isCountryOpen && styles.open}`}>
                          {countryItems.map(item => (
                              <div className={styles.countryDropdownItem} onClick={e => handleCountryClick(e.target.id)} id={item.id}>
                                  <span className={`${styles.dropdownItemDot} ${item.id == selectedCountry && styles.selected}`}>• </span>
                                  <Image src={australia} width={20} height={20} alt='country' />

                                  {item.label}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.purchaseAndSale}>
              <div className={styles.purchase}>
                  <p>Enter purchase price of Crypto</p>
                  <input
                      className={styles.inputBar}
                      type="text"
                      value={purchaseValue}
                      onChange={handlePurchaseChange}
                      placeholder="Enter purchase price..."
                  />
              </div>
              <div className={styles.sale}>
                  <p>Enter sale price of Crypto</p>
                  <input
                      className={styles.inputBar}
                      type="text"
                      value={saleValue}
                      onChange={handleSaleChange}
                      placeholder="Enter sale price..."
                  />
              </div>
          </div>
          <div className={styles.ExpenseAndType}>
              <div className={styles.purchase}>
                  <p>Enter your Expenses</p>
                  <input
                      className={styles.inputBar}
                      type="text"
                      value={expensesValue}
                      onChange={handleExpensesChange}
                      placeholder="Enter expenses..."
                  />
              </div>
              <div className={styles.sale}>
                  <p>Investment Type</p>
                  <div className={styles.investmentTypeBtns}>
                      <button
                          onClick={() => handleInvestmentTypeSelect(1)}
                          className={investmentType === 1 ? styles.selectedBtn : ''}
                      >
                          Short Term
                      </button>
                      <button
                          onClick={() => handleInvestmentTypeSelect(2)}
                          className={investmentType === 2 ? styles.selectedBtn : ''}
                      >
                          Long Term
                      </button>
                  </div>
                  <div className={styles.months}>
                        <p>&lt; 12 months</p>
                        <p>&gt; 12 months</p>
                  </div>
              </div>
          </div>
          <div className={styles.annualIncomeDiv}>
              <div className={styles.annualIncome}>
                  <p>Select Your Annual Income</p>
                  <div className={styles.incomeDropdown}>
                      <div className={styles.dropdownHeader} onClick={toggleIncomeDropdown}>
                          {selectedIncome ? incomeItems.find(item => item.id == selectedIncome).label : "Select Income"}
                          <i className={`fa fa-chevron-right ${styles.icon} ${isYearOpen && styles.open}`}>
                              <Image src={arrow} width={8} height={5} />
                          </i>
                      </div>
                      <div className={`${styles.incomeDropdownBody} ${isIncomeOpen && styles.open}`}>
                          {incomeItems.map(item => (
                              <div className={styles.dropdownItem} onClick={e => handleIncomeClick(e.target.id)} id={item.id}>
                                  <span className={`${styles.dropdownItemDot} ${item.id == selectedIncome && styles.selected}`}>• </span>
                                  {item.label}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <div className={styles.taxRateDiv}>
                    <p className={styles.taxRateHeading}>Tax Rate</p>
                    <p className={styles.taxRateHeadingMobile}>Tax Rate:</p>
                    <p className={styles.taxRate}>{getTaxRate()}</p>
              </div>
          </div>
          {(() => {
              if (investmentType === 2) {
                  return <div className={styles.gainAndDiscountDiv}>
                  <div className={styles.gainDiv}>
                      <p>Capital gains amount</p>
                      <div className={styles.gainBox}>
                          <p>{calculateCapitalGainsAmount()}</p>
                      </div>
                  </div>
                  <div className={styles.discountDiv}>
                      <p>Discount for long term gains</p>
                          <div className={styles.discountBox}>
                              <p>{calculateDiscount()}</p>
                          </div>
                  </div>
    
              </div>;
              } else {
                  return <div></div>;
              }
          })()}
          <div className={styles.netCapitalAndtax}>
            <div className={styles.netCapitalBox}>
                <p className={styles.netCapitalAndtaxHeading}>Net Capital gains tax amount</p>
                  <p className={styles.netCapitalAmt}> 
                  {/* net capital gains */}
                      {(() => {
                        // if long term
                          if (investmentType === 2) {
                              return <p>{calculateCapitalGainsAmount() - calculateDiscount()}</p>;
                          } else {
                              return <div>{calculateCapitalGainsAmount()}</div>;
                          }
                      })()}
                  </p>
            </div>
            <div className={styles.taxToPayBox}>
                <p className={styles.netCapitalAndtaxHeading}>The tax you need to pay*</p>
                <p className={styles.taxToPayAmt}>{calculateTaxToPay()}</p>
            </div>
          </div>
          
      </div>
  )
}

export default Calculator