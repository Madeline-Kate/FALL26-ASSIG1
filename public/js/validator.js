// =====================================================================
// MISSION 1: Defensive data handling (Unit 1.2)
// =====================================================================
// This file runs in TWO places:
//   1) In Node, through the tests:   npm run test:m1
//   2) In the browser, in Mission 3, loaded by index.html
//
// Rules for this file:
//   - No var. Use const and let.
//   - Only strict equality (=== and !==).
//   - Fail safe: anything unexpected is rejected, never "fixed".
// =====================================================================

const { json } = require("express");

const ALLOWED_STATUS = ["up", "degraded", "down"];
const MAX_NAME_LENGTH = 64;

function normalizeService(raw) { 
  if (raw === null || typeof raw !== "object" || Array.isArray(raw) || !ALLOWED_STATUS.includes(raw.status) || typeof(raw.online) !== "boolean" || typeof(raw.latencyMs) !== "number" || raw.latencyMs < 0 || raw.latencyMs === Infinity || typeof raw.name !== "string" || raw.name.length > MAX_NAME_LENGTH || raw.name.trim().length===0){
    return null;
  }
  let normalized = {name: raw.name.trim(), status: raw.status, online: raw.online, latencyMs: raw.latencyMs};
  return normalized;
}

/**
 * Parses the full JSON text returned by the server.
 *
 * On success returns:
 *   { services: [ ...valid normalized entries ], rejected: <number of invalid entries>, error: null }
 *
 * If the text is not valid JSON, or the parsed value has no "services" array, returns:
 *   { services: [], rejected: 0, error: "invalid report" }
 */
function parseStatusReport(jsonText) {
  try{
    let json_value = JSON.parse(jsonText);
    let output = [];
    let rejected = 0;
    json_value.services.forEach(element => {
      if(normalizeService(element) !== null){
        output.push(element);
      }
      else{
        rejected++;
      }
    });
    return {services: output, rejected: rejected, error: null};
}
catch(error){
  return { services: [], rejected: 0, error: "invalid report" };
}
}

// Lets Node's require() see these functions. The browser simply ignores this block.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { normalizeService, parseStatusReport, ALLOWED_STATUS, MAX_NAME_LENGTH };
}
