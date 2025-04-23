// ==UserScript==
// @name         TracxnScrapper
// @version      0.1
// @description  This adds a button onto all web pages, when clicked, sends the current page to a Custom Webhook trigger on Make
// @author       @mithilesh
// @include      https://tracxn.com/d/companies/*
// @connect      *
// @match
// @grant        GM_xmlhttpRequest


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
        const ProfitSelector = document.getElementsByClassName("txn--text-color-mine-shaft txn--text-decoration-none");
        const KeyMetricsSelector = document.getElementsByClassName("txn--font-14 txn--margin-bottom-12");
        const WebsiteSelector = document.getElementsByClassName("txn--seo-companies__details__value")

        // Extract the data
        const Website = "https://"+WebsiteSelector[0].textContent || 'Not found';
        const Stage = KeyMetricsSelector[2].textContent || 'Not found';
        const TotalFunding = KeyMetricsSelector[3].textContent || 'Not found';
        const LatestFundingRound = KeyMetricsSelector[4].textContent || 'Not found';
        const AnnualRevenue = KeyMetricsSelector[8].textContent || 'Not found';


        // const growthScore = ScoreSelector[2].textContent || 'Not found';
        // const growthPrediction = growthPredictionSelector[0].textContent || 'Not found';

        // Log the extracted data for debugging
        // console.log('Website:', Website);
        console.log('Stage:', Stage);
        console.log('Total Funding:', TotalFunding);
        console.log('Latest Funding Round:', LatestFundingRound);
        console.log('Annual Revenue:', AnnualRevenue);


        // Format the data for Excel (tab-separated values)
       const data = `${Stage}\t${AnnualRevenue}\t${TotalFunding}\t${LatestFundingRound}`;


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