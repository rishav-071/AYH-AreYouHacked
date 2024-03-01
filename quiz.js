let p = document.getElementById("p")
let op = document.getElementsByClassName("op")
let submit = document.getElementById("submit")
let hide = document.getElementById("hide")
let description = document.getElementById("description")
let next = document.getElementById("next")
let option = document.getElementsByClassName("option")
let body = document.getElementById("body")
let quiz = document.getElementById("quiz")
let show = document.getElementById("show")
let showScore = document.getElementById("showScore")
let bg1 = document.getElementById("bg1")
let hacker = document.getElementById("hacker")
let label=document.getElementsByClassName("label")
let i = 0, score = 0, t = 0

const question = [
    "Q1. Click on the secured link",
    "Q2. You receive an email from what appears to be your bank, stating there's an urgent issue with your account and requesting immediate action. What should you do?",
    "Q3. You receive a friend request on social media from someone who appears to be a mutual friend, but their profile contains photos that look slightly different from what you remember. What should you do?",
    "Q4. Which of the following is not a type of cyber attack?",
    "Q5. What is the most common password used by people worldwide?",
    "Q6. Which of the following is the safest password?",
    "Q7. Which of the following is an example of a sophisticated cyber security fraud technique that involves manipulating audio recordings to deceive individuals or organizations?",
    "Q8. What is the primary purpose of the Card Verification Value (CVV) or Card Verification Code (CVC) found on credit cards?",
    "Q9. Which of the following red flags should job seekers be wary of when evaluating potential job opportunities to avoid falling victim to employment cyber scams?",
    "Q10. You notice that your computer is running slower than usual and the fan is working harder, even when you're not performing any intensive tasks. What could be a possible explanation for this?",
]

const opt = [[
    "https://www.micosoft.com/update/login",
    "Click on the link provided in the email and to know the link authenticity",
    "Accept the friend request and engage with the profile as you normally would, assuming it's just an updated photo.",
    "Phishing Attack",
    "123456",
    "password123",
    "Phishing",
    "To verify the cardholder's identity during online transactions.",
    "Receiving a job offer without an interview",
    "Your computer is infected with ransomware, encrypting your files.",
], [
    "https://www.paypal-security-check.com",
    "Ignore the email, as it's likely a phishing attempt trying to trick you into disclosing sensitive information",
    "Decline the friend request and report the profile to the social media platform for further investigation.",
    "Malware Attack",
    "password",
    "123456",
    "CEO Fraud",
    "To encrypt the credit card number for enhanced security.",
    "Being asked to pay upfront fees for training or equipment",
    "You have accidentally installed a resource-intensive software program.",
], [
    "https://www.netflix-verify-account.net",
    "Reply to the email with your account and try to track information about sender",
    "Send a message to your mutual friend asking if they created a new account or updated their profile picture",
    "Social Engineering Attack",
    "qwerty",
    "CorrectHorseBatteryStaple",
    "Deepfake",
    "To provide access to cash advances at ATMs.",
    "The company's website lacking contact information or legitimate company details",
    "Your computer is being targeted by a cryptojacking attack, using your system's resources to mine cryptocurrencies.",
], [
    "None of the above",
    "Forward the email to your friends and family to warn them about the potential scam",
    "Ignore the friend request and block the profile to prevent any potential scams or identity theft",
    "Patching Attack",
    "admin",
    "!@#^&*()",
    "Ransomware",
    "To authenticate the cardholder's signature during in-person transactions.",
    "All of the above",
    "Your computer's hardware is outdated and struggling to keep up with modern applications.",
]]

let ans = [
    "None of the above",
    "Ignore the email, as it's likely a phishing attempt trying to trick you into disclosing sensitive information",
    "Decline the friend request and report the profile to the social media platform for further investigation.",
    "Patching Attack",
    "123456",
    "CorrectHorseBatteryStaple",
    "Deepfake",
    "To verify the cardholder's identity during online transactions.",
    "All of the above",
    "Your computer is being targeted by a cryptojacking attack, using your system's resources to mine cryptocurrencies.",
]

const detail = [
    "Case study: A text message claiming to be from a reputable Indian bank informs recipients that their account has been temporarily suspended due to suspicious activity. The message includes a link to verify account details and reactivate the account. Users who click on the link are taken to a phishing website that mimics the bank's official login page. Upon entering their credentials, the information is stolen by cybercriminals, who can then gain unauthorized access to the victims' bank accounts.",
    "Case Study: Rahul, a working professional in Bangalore, receives an email purporting to be from his bank, a prominent Indian financial institution. The email informs Rahul that there has been suspicious activity detected on his account and advises him to click on a link to verify his account details to prevent any unauthorized access.\nUnaware of the potential risks, Rahul clicks on the link provided in the email, which directs him to a website that closely resembles his bank's official online banking portal. The website prompts Rahul to enter his username, password, and other personal information to proceed with the verification process.\nTrusting the authenticity of the website due to its convincing appearance, Rahul enters his login credentials and submits the requested information. After completing the process, he receives a confirmation message stating that his account has been successfully verified.\n\nConsequences: Unbeknownst to Rahul, the website he visited was a sophisticated phishing site created by cybercriminals to steal sensitive information from unsuspecting victims. By entering his login credentials and personal information, Rahul has inadvertently provided cybercriminals with access to his bank account.\nShortly after submitting his information, Rahul notices unauthorized transactions and withdrawals from his bank account. Upon realizing that he has fallen victim to a phishing scam, Rahul contacts his bank to report the fraudulent activity and seeks assistance in securing his account.\n\nInvestigation: Upon receiving Rahul's report, the bank launches an investigation into the phishing scam. Through forensic analysis and collaboration with cybersecurity experts, the bank identifies the malicious website used in the scam and traces its origin to a network of cybercriminals operating from outside India.\nThe authorities are alerted, and efforts are made to dismantle the phishing operation and apprehend the perpetrators. In the meantime, the bank implements enhanced security measures to protect its customers from similar phishing attacks in the future.",
    "Case study: Priya comes across a social media profile that appears to belong to a mutual friend. The profile contains photos, posts, and personal information that seem authentic and consistent with what Priya knows about her friend.\nPriya receives a friend request from the profile and accepts it without much suspicion, assuming that her friend created a new account. Over time, Priya engages with the profile, liking and commenting on posts, and exchanging messages with the person behind the profile.\nUnbeknownst to Priya, the social media profile is actually a fake created by a cybercriminal using morphing image technology. The scammer has used sophisticated software to morph images of Priya's friend with those of another individual, creating a convincing composite that resembles a real person.",
    "Phishing Attack:\nScenario: In 2022, a mid-sized accounting firm, ABC Financial Consultants, fell victim to a phishing attack. Employees received emails purportedly from their bank, requesting urgent action to verify account details due to a security breach. The emails contained a link to a fake banking website designed to mimic the bank's official portal.\n\nImpact: Several employees fell for the scam, providing their login credentials and sensitive financial information on the fake website. The cybercriminals gained unauthorized access to the firm's banking accounts, leading to financial losses and compromised client data.\n\n\nMalware Attack: \n\nIn 2023, a large manufacturing company, XYZ Industries, experienced a malware attack. A malicious attachment in a seemingly innocuous email was opened by an employee, infecting the company's network with ransomware.\nImpact:\nThe ransomware encrypted critical files and systems, causing widespread disruption to production operations. XYZ Industries faced sMalware Attack.\n\nScenario:\nIn 2023, a large manufacturing company, XYZ Industries, experienced a malware attack. A malicious attachment in a seemingly innocuous email was opened by an employee, infecting the company's network with ransomware.\nImpact:\nThe ransomware encrypted critical files and systems, causing widespread disruption to production operations. XYZ Industries faced significant financial losses due to downtime, ransom payments, and reputational damage.\n\n\nSocial Engineering Attack:\n\nScenario:\nIn 2024, a financial services firm, DEF Investments, became a victim of a social engineering attack. An individual posing as a prospective client contacted a senior executive via phone, requesting access to sensitive financial data under the guise of conducting a large investment transaction.\nImpact:\nThe senior executive, unaware of the deception, granted the imposter access to confidential client information, including account details and investment strategies. The imposter exploited the information for financial fraud and identity theft, causing substantial losses to DEF Investments and its clients.",
    "Case study: The reason this breach is relevant to the topic of easy passwords is that it revealed the widespread use of weak passwords among users. It was discovered that many users had employed easily guessable passwords such as '123456', 'password', 'linkedin', and variations thereof.\nHackers exploited this vulnerability by employing brute-force attacks or using readily available password-cracking tools to decipher the hashed passwords. Once they successfully obtained a user's password, they could potentially access their LinkedIn account and any other accounts where the user had reused the same password.\nThis incident underscores the importance of using strong, unique passwords for each online account. It also highlights the risks associated with password reuse, as a compromised password from one service can lead to unauthorized access to multiple accounts. In response to the breach, LinkedIn implemented various security measures, including stronger password requirements and the introduction of multi-factor authentication to enhance user account security.",
    "Case study:-Priya, a security-conscious individual, was tasked with creating a password for her online banking account. Aware of the risks associated with weak passwords, Alice sought to employ a strong and memorable passphrase instead of a conventional password. She remembered the advice of using a series of unrelated words, which led her to create the passphrase 'CorrectHorseBatteryStaple.'\nCase Scenario:\nAs Priya proceeded to use her passphrase for her online banking account, she encountered skepticism from her peers who believed that longer passwords with random characters were more secure. Despite their doubts, Alice remained confident in the strength of her passphrase, citing research that demonstrated the resilience of passphrases against brute-force attacks and password-cracking algorithms.",
    "Case study: Deepfake CEO Fraud Targeting Indian Corporation\nBackground:\nA large Indian corporation, XYZ Ltd., operates in various sectors and has a global presence. The CEO of XYZ Ltd., Mr. Sharma, is a prominent figure in the business community and frequently communicates with employees via email and video conferences.\nScenario:\nCybercriminals, aware of Mr. Sharma's influence within the organization, decide to orchestrate a deepfake CEO fraud scheme to defraud XYZ Ltd. and its employees.\nPreparation:\nThe cybercriminals gather publicly available information about Mr. Sharma, including his voice recordings from interviews, speeches, and public appearances. Using advanced deepfake technology, they generate a realistic audio clip of Mr. Sharma's voice.\nExecution\nThe cybercriminals send targeted phishing emails to employees within XYZ Ltd., purporting to be from Mr. Sharma. The emails contain urgent requests for confidential information, such as financial reports, employee payroll data, or login credentials for sensitive systems.\nDeception:\nTo enhance the credibility of the scam, the cybercriminals attach the deepfake audio recording of Mr. Sharma's voice to the phishing emails. The audio message reinforces the urgency of the request and manipulates employees into believing that it is genuinely from the CEO.\nFraudulent Actions:\nTricked by the convincing deepfake audio message and the apparent authority of the sender, several employees comply with the requests and unknowingly divulge sensitive information or grant access to critical systems. The cybercriminals exploit this information to perpetrate further fraud, such as unauthorized fund transfers or data theft.\nDiscovery:\nEventually, some employees become suspicious of the unusual requests and decide to verify the authenticity of the communications directly with Mr. Sharma or the company's IT security team. Upon investigation, it becomes apparent that the emails were part of a sophisticated deepfake CEO fraud scheme.\nResponse:\nXYZ Ltd. immediately notifies law enforcement authorities and regulatory bodies about the cyber fraud incident. The company implements enhanced cybersecurity measures, including employee training on identifying phishing scams, implementing email authentication protocols, and deploying advanced threat detection technologies to prevent similar incidents in the future.",
    "Case study: Raj, an avid online shopper, regularly uses his credit card for making purchases on e-commerce websites. Despite being cautious about sharing his credit card details, Raj falls victim to CVV fraud after unknowingly disclosing his CVV code to a fraudulent website.\nCase Scenario:\nOne day, Raj receives an email from what appears to be a reputable online retailer, offering exclusive discounts on products. Excited by the offer, Raj clicks on the email link and is directed to a website that closely resembles the retailer's official site. He proceeds to make a purchase and is prompted to enter his credit card information, including the CVV code, to complete the transaction.\nUnbeknownst to Raj, the website is a sophisticated phishing scam designed to steal credit card information. The fraudsters behind the site harvest Raj's credit card details, including the CVV code, and use it to make unauthorized purchases or sell the information on the dark web.\nConsequences:\nAs a result of CVV fraud:\nFinancial Loss: Raj incurs unauthorized charges on his credit card, leading to financial losses and potential disputes with the credit card issuer.\nCompromised Privacy: Raj's personal information, including his credit card details and CVV code, is compromised, posing a risk of identity theft and fraud.\nTrust Issues: Raj experiences a loss of trust in online retailers and becomes wary of sharing sensitive information online, impacting his online shopping habits and experiences.",
    "Case study: Sarah, a recent graduate seeking employment opportunities in the IT sector, came across a job listing for a prestigious tech company posted on an online job portal. Excited by the prospect of landing a job with a renowned company, Sarah applied for the position and awaited a response.\nCase Scenario:\nShortly after submitting her application, Sarah received an email from the supposed HR department of the tech company, informing her that she had been selected for an interview. However, Sarah noticed several red flags that raised suspicions about the legitimacy of the job offer.\nReceiving a Job Offer Without an Interview: Sarah found it unusual to receive a job offer without undergoing an interview process or meeting with company representatives in person or via video conferencing.\nBeing Asked to Pay Upfront Fees: In the email, Sarah was informed that she would need to pay an upfront fee for training materials and certification exams required for the job. This request for payment raised concerns, as legitimate employers typically cover such expenses for employees.\nLack of Legitimate Company Details: Upon conducting further research, Sarah discovered that the company's website lacked essential contact information, such as a physical address or phone number. Additionally, the website appeared hastily put together, with inconsistencies in branding and design.\nConsequences:\nRecognizing the red flags indicative of employment cyber scams, Sarah chose to refrain from further engagement with the purported job offer. While disappointed by the realization that the job opportunity was likely fraudulent, Sarah avoided potential financial losses and safeguarded her personal information from falling into the hands of cybercriminals.",
    "Explanation: \nCryptojacking involves hijacking victims' computing resources to mine cryptocurrencies without their consent. This can cause symptoms such as slow system performance and increased energy consumption, as the attacker's malicious scripts run in the background, utilizing the victim's CPU or GPU resources to mine cryptocurrency. It's essential for users to stay vigilant and employ security measures to detect and prevent cryptojacking attacks on their devices.\nCse Study:\nSophia, an avid computer user, notices that her computer has been running unusually slow for the past few days. Despite not running any resource-intensive applications, she hears the fan working harder than usual, and there's a noticeable lag in her system's responsiveness.\nInitially, Sophia dismisses these signs as temporary glitches or perhaps the result of outdated hardware. However, as the performance issues persist, she becomes increasingly concerned about a potential security threat.\nRemembering her knowledge of cybersecurity, Sophia decides to investigate further. She runs a thorough antivirus scan, but the scan doesn't detect any malware or viruses on her system. Perplexed, Sophia considers other possible explanations for the abnormal behavior of her computer.\nRecalling recent news articles about cryptojacking attacks, Sophia wonders if her system could be a victim of such an attack. She conducts research on cryptojacking and learns that attackers often use victims' computing resources to mine cryptocurrencies without their consent.\nRealizing that her symptoms align with the signs of a cryptojacking attack, Sophia takes immediate action. She examines her computer's processes and discovers an unfamiliar script running in the background, consuming a significant portion of her CPU resources.\nSophia understands that this script is likely the culprit behind the performance issues she's been experiencing. Concerned about the security implications of cryptojacking and the potential for further exploitation of her system, Sophia promptly removes the malicious script and implements additional security measures to safeguard her computer against future attacks.\nThrough her proactive approach to cybersecurity and willingness to investigate unusual symptoms, Sophia successfully mitigates the cryptojacking attack on her computer, protecting her sensitive data and ensuring the continued integrity of her system.\nThis case study highlights the importance of remaining vigilant against emerging cyber threats such as cryptojacking and the value of taking swift action to address potential security vulnerabilities.",
]

p.innerText = question[i]
for (let j = 0; j < 4; j++) {
    op[j].innerText = opt[j][0]
}
submit.disabled = true
submit.style.backgroundColor="rgb(154, 222, 251)"
next.style.backgroundColor="rgb(154, 222, 251)"

for (k = 0; k < 4; k++) {
    option[k].onclick = function () {
        submit.disabled = false
    }
}

function onSubmit() {
    hide.style.display = "block"
    submit.disabled = true
    description.innerText = detail[i]
    for (let it = 0; it < 4; it++) {
        if (option[it].checked) {
            if (ans[i] == opt[it][i]) {
                score++
                label[it].style.backgroundColor="rgb(116, 252, 116)"
            } else {
                description.style.color = "white"
                body.style.animationName = "fade"
                bg1.style.display="none"
                hacker.style.display="none"
                label[it].style.backgroundColor="rgb(252, 116, 116)"
            }
        }
        option[it].disabled = true
    }
}

submit.addEventListener("click", onSubmit);

function onNext() {
    i++
    body.style.animationName = ""
    hide.style.display = "none"
    submit.style.backgroundColor="rgb(154, 222, 251)"
    if (i != 10) {
        p.innerText = question[i]
        for (let j = 0; j < 4; j++) {
            option[j].checked = false
            option[j].disabled = false
            op[j].innerText = opt[j][i]
            bg1.style.display="block"
            hacker.style.display="block"
            label[j].style.backgroundColor="white"
        }
    } else {
        quiz.style.display = "none"
        show.style.display = "block"
        bg1.style.display="none"
        hacker.style.display="none"
        showScore.innerText = `Your Score is ${score} out of 10 in ${t} seconds.\nIn duration you took to attempt the Quiz, ${Math.floor(t/39+1)} Computers is/are already Hacked. `
        showScore.style.textAlign="center"
        body.style.backgroundColor="black"

    }
    if (i == 9) next.innerText = "Finish"
}

next.addEventListener("click", onNext);

setInterval(() => {
    t++
}, 1000);