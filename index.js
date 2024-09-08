// script.js
function generateResume() {
    var _a, _b, _c, _d, _e, _f;
    // Get user input values with null checks
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || 'N/A';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || 'N/A';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || 'N/A';
    var education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value) || 'N/A';
    var experience = ((_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value) || 'N/A';
    var skills = ((_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value) || 'N/A';
    // Build resume output
    var resumeOutput = "\n      <h2>".concat(sanitizeHTML(name), "</h2>\n      <p><strong>Email:</strong> ").concat(sanitizeHTML(email), "</p>\n      <p><strong>Phone:</strong> ").concat(sanitizeHTML(phone), "</p>\n      <h3>Education</h3>\n      <p>").concat(sanitizeHTML(education), "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(sanitizeHTML(experience), "</p>\n      <h3>Skills</h3>\n      <p>").concat(sanitizeHTML(skills), "</p>\n    ");
    // Display resume output in the resume container
    var resumeContainer = document.getElementById('resume-output');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeOutput;
    }
}
// Optional: Basic input sanitization to prevent XSS
function sanitizeHTML(input) {
    var div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
