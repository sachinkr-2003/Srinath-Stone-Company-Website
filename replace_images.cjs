const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/Users/lOQ/Desktop/Srinath Stone Company/website/Frontend/src';

const replaceUnsplash = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // A simple regex to find unsplash URLs
    const regex = /https:\/\/(images|plus)\.unsplash\.com\/[^"']+/g;
    
    content = content.replace(regex, (match) => {
        hasChanges = true;
        return 'https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image';
    });

    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
};

const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkSync(filePath);
        } else if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
            replaceUnsplash(filePath);
        }
    }
};

walkSync(directoryPath);
console.log('Done replacing images.');
