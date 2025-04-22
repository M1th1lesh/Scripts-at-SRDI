// ==UserScript==
// @name         CrunchbaseScrapper
// @version      0.1
// @description  This adds a button onto all web pages, when clicked, sends the current page to a Custom Webhook trigger on Make
// @author       @mithilesh
// @include      https://www.crunchbase.com/organization/*
// @connect      *
// @match
// @grant        GM_xmlhttpRequest


// ==/UserScript==

// Date: 22 April 2025

(function() {
  'use strict';



  // Your Custom Webhook URL
  const webhookUrl = 'https://www.crunchbase.com/organization/ecsoglobal';

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
        const ScoreSelector = document.getElementsByClassName("chip-text");
        const growthPredictionSelector = document.getElementsByClassName("display-value ng-star-inserted");

        // Extract the data
        const heatScore = ScoreSelector[0].textContent || 'Not found';
        const growthScore = ScoreSelector[2].textContent || 'Not found';
        const growthPrediction = growthPredictionSelector[0].textContent || 'Not found';

        // Log the extracted data for debugging
        console.log('Heat Score:', heatScore);
        console.log('Growth Score:', growthScore);
        console.log('Growth Prediction:', growthPrediction);

        // Format the data for Excel (tab-separated values)
       const data = `${heatScore}${growthScore}${growthPrediction}`;


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
