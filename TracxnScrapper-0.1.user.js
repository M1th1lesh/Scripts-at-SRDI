// ==UserScript==
// @name         TracxnScrapper
// @version      0.2
// @description  This adds a button onto all web pages, when clicked, sends the current page to a Custom Webhook trigger on Make
// @author       @mithilesh
// @include      https://tracxn.com/d/companies/*
// @connect      *
// @match
// @grant        GM_xmlhttpRequest
// @updateURL     https://github.com/M1th1lesh/Scripts-at-SRDI/blob/main/TracxnScrapper-0.1.user.j
// @downloadURL   https://github.com/M1th1lesh/Scripts-at-SRDI/blob/main/TracxnScrapper-0.1.user.js


// ==/UserScript==

// Date: 22 April 2025

(function() {
  'use strict';



  // Your Custom Webhook URL
  const webhookUrl = 'https://tracxn.com/d/companies/*';

  // Create button
  const btn = document.createElement('button');
  btn.textContent = 'Copy Button';
  btn.style.position = 'fixed';
  btn.style.bottom = '0';
  btn.style.right = '0';
  btn.style.zIndex = '999999';
  btn.style.padding = '0.5em 1.2em';
  btn.style.fontSize = '1rem';

  // When button is clicked
  btn.addEventListener('click', function() {
        extractAndCopyData();
function extractAndCopyData() {
        // Selectors for the required data
        //const ProfitSelector = document.getElementsByClassName("txn--text-color-mine-shaft txn--text-decoration-none");
        const KeyMetricsTitleSelector = document.getElementsByClassName("txn--font-14 txn--font-medium");
        const KeyMetricsSelector = document.getElementsByClassName("txn--font-14 txn--margin-bottom-12");
        //const WebsiteSelector = document.getElementsByClassName("txn--seo-companies__details__value")

        // Extract the data
        var Location="Not found"
        var Year="Not found"
        var Age="Not found"
        var Stage="Not found"
        var AnnualRevenue="Not found"
        var TotalFunding="Not found"
        var LatestFundingRound="Not found"

        //const Website = "https://"+WebsiteSelector[0].textContent || 'Not found';
       


        for (let i = 0; i < KeyMetricsTitleSelector.length; i++) {
             if (KeyMetricsTitleSelector[i].textContent=="Founded Year"){
                  Year = KeyMetricsSelector[i].textContent || 'Not found';
                  Age = new Date().getFullYear() - KeyMetricsSelector[i].textContent || 'Not found';
             }
            if (KeyMetricsTitleSelector[i].textContent=="Location"){
                  Location = KeyMetricsSelector[i].textContent || 'Not found';
             }
            if (KeyMetricsTitleSelector[i].textContent=="Stage"){
                  Stage = KeyMetricsSelector[i].textContent || 'Not found';
             }
            if (KeyMetricsTitleSelector[i].textContent=="Total Funding"){
                  TotalFunding = KeyMetricsSelector[i].textContent || 'Not found';
             }
            if (KeyMetricsTitleSelector[i].textContent=="Latest Funding Round"){
                  LatestFundingRound = KeyMetricsSelector[i].textContent || 'Not found';
             }
            if (KeyMetricsTitleSelector[i].textContent=="Annual Revenue"){
                  AnnualRevenue = KeyMetricsSelector[i].textContent || 'Not found';
             }



}



        // const growthScore = ScoreSelector[2].textContent || 'Not found';
        // const growthPrediction = growthPredictionSelector[0].textContent || 'Not found';

        // Log the extracted data for debugging
        // console.log('Website:', Website);
        console.log('Stage:', Stage);
        console.log('Total Funding:', TotalFunding);
        console.log('Latest Funding Round:', LatestFundingRound);
        console.log('Annual Revenue:', AnnualRevenue);
       // console.log('Revenue($):', Revenue);
        console.log('Age:', Age);




        // Format the data for Excel (tab-separated values)
       const data = `${Location}\t${Year}\t${Age}\t${Stage}\t\t\t${AnnualRevenue}\t${TotalFunding}\t${LatestFundingRound}`;


        // Copy the data to the clipboard
        navigator.clipboard.writeText(data).then(function() {
            console.log('Data copied to clipboard:', data);
            alert('Data copied to clipboard:\n' + data);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

      });



  // Add button to page
  document.body.appendChild(btn);
})();
