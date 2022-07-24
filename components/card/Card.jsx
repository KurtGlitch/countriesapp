import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card(props) {

  const url = "https://restcountries.com/v3.1/name/"

  const cardTheme = {
    backgroundColor: props.theme ? "var(--colr-white)" : "var(--colr-darkblue)",
  };

  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}
  
  const allcountriesCard = props.countries.filter((val)=>{
    if (props.formInput == ""){
      return val
    } else if (val.name.common.toLowerCase().includes(props.formInput.toLowerCase()) || val.cca3.toLowerCase().includes(props.formInput.toLowerCase())){
      return val
    }
  }).map((x) => {

    return (
      <Link href={'/' + x.name.common.toLowerCase()} key={x.name.common} >
        <div style={cardTheme} className={styles.card}><img
          src={x.flags.png}
          alt="country flag"
          width="320px"
          height="180px"
        />
        <div className={styles.info}>
          <h2 className={styles.name}>{x.name.official}</h2>

          <article>
            <p className="inline">Population:</p>
            <p className={`${styles.secValue} inline`}>{abbreviateNumber(x.population)}</p>
          </article>
          <article>
            <p className="inline">Region:</p>
            <p className={`${styles.secValue} inline`}>{x.region}</p>
          </article>
          <article>
            <p className="inline">Capital:</p>
            <p className={`${styles.secValue} inline`}>{x.capital}</p>
          </article>
        </div></div>
        
      </Link>
    );
  });

  

  return <div className={`${styles.mainDiv} container`}>{allcountriesCard}</div>;
}

export default Card;
