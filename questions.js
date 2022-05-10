console.log("PCC Insecurity Survey questions");

function createSurveyQuestions() {
    var q1 = new MultipleSelectQuestionOther("Status", "What is your your status at PCC? ( select  more than one if applicable)", 
    ["Full time student", 
     "Part time student", 
     "GED student", 
     "High School dual enrollment", 
     "International Student", 
     "Work Study", 
     "Full time Faculty", 
     "Part time Faculty", 
     "Full time staff", 
     "Part time staff", 
     "Management", 
    ]
);

    var q2 = new MultipleSelectQuestion(
        "Campus",
        "What location do you primarily spend your time when at PCC? (IF equally split between campuses - circle both)",
        [
            "Cascade Campus",
            "Rock Creek Campus",
            "Southeast Campus",
            "Sylvania Campus",
            "Online courses only",
            "Other PCC Center/location",
        ]
    );
    
    var q3 = new ShortAnswerQuestion("Zip Code", "What is your zip code?");
    
    
    var q11 = new MultipleChoiceQuestionOther (
    "Current Housing Type",
    "What type of housing do you currently live in?",
        [
            "House",
            "Condominium/Townhouse",
            "Apartment",
            "Duplex",
            "Mobile Home",
        ]
    );
    var q18 = new MultipleChoiceQuestion(
    "Home Foreclosure",
    "Have you ever had a home foreclosed on?",
        ["Yes", "No"]
    );
    
    var allQuestions = [q1, q2, q3, q11, q18];
    
    for (var counter = 0; counter < allQuestions.length; counter++) {
        allQuestions[counter].number = counter + 1;
    }
    
    var s1 = new QuestionSection("Demographics", [q1, q2, q3]);
    var s2 = new QuestionSection("Housing Information", [q11, q18]);
    
    var allSections = [s1, s2];
    
    for (var counter = 0; counter < allSections.length; counter++) {
        allSections[counter].number = counter + 1;
    }
    
    return new Survey("PCC Housing Insecurity Survey", [s1, s2]);
}