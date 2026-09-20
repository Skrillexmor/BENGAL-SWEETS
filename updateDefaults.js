const fs = require('fs');

const dumpData = JSON.parse(fs.readFileSync('dump.json', 'utf8'));

// We want to stringify the data and create the replacement block
const replacementArray = JSON.stringify(dumpData, null, 2);

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the start and end of DEFAULT_DELICACIES
  const startIndex = content.indexOf('const DEFAULT_DELICACIES = [');
  if (startIndex === -1) {
    console.error('Could not find DEFAULT_DELICACIES in ' + filePath);
    return;
  }
  
  // Find the end of the array (];)
  const afterStart = content.substring(startIndex);
  const endIndexOffset = afterStart.indexOf('];');
  
  if (endIndexOffset === -1) {
    console.error('Could not find end of DEFAULT_DELICACIES in ' + filePath);
    return;
  }
  
  const endIndex = startIndex + endIndexOffset + 2;
  
  const newContent = content.substring(0, startIndex) + 
                     'const DEFAULT_DELICACIES = ' + replacementArray + ';' + 
                     content.substring(endIndex);
                     
  fs.writeFileSync(filePath, newContent);
  console.log('Successfully updated ' + filePath);
}

updateFile('public/app.js');
updateFile('seed.js');
