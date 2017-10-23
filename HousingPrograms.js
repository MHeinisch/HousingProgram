$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                    stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                }
        	},
        	email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },            
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },            
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            years: {
            	validators:{
            		notEmpty: {
            			message: 'Please supply the number of years rented or owned'
            		}
            	}
            }
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            }            
        }
    })
    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });
});

function CheckForComplianceLoanProgramEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "Complaince Loan Program";
	// must own (not rent)
	// single family or duplex property
	// open building code orders from Department of Neighborhood Services
	// total cost of repairs <= $15,000
	// property taxes must be paid in full or on an approved payment plan
	// owner cannot be bankrupt (other than Chapter 13)
	// property cannot be in foreclosure/all mortgage payments must be current
	// utility payments must be current
	// total household income must be <= 50% County Median Income
}

function CheckForSTRONGHomesLoanEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "STRONG Homes Loan";
	// property must be owned by applicant
	// applicant must be current on property taxes
	// applicant must be current on mortgage/utility payments or be on approved payment plan
	// household income qualifications *see packet page 5*
}

function CheckForTargetedInvestmentNeighborhoodsEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "Targeted Invesetment Neighborhoods";
	// requirements for homeowners:
		// must own/occupy home
		// household income < 80% of Area Median Income *see packet page 6*
		// must be current on mortgage/property taxes
		// flexible underwriting guidelines, but must have history of paying bills on time

	// requirements for rental property owners:
		// must have responsible track record of owning/managing rental property in the city
		// must have attended City of Milwaukee Landlord Training Class
		// must match amount of assistance they are receiving on a dollar for dollar basis and show proof of matching funds
		// units must generally have 2+ bedrooms
		// units must be rented to, and affordable to families earning < 60% of Area Median income for five years after closing *see packet page 6*
}

function CheckForNeighborhoodImprovementProgramEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "Neighborhood Improvement Program";
	// must have owned and occupied the property for at least five years
	// must be current on mortgage, property taxes, and utility payments
	// must have current homeowners insurance
	// household income must be at or below 60% of Area Median Income *see packet page 10*
	// must not have received prior NIP or other city home repair assistance
}

function CheckForMilwaukeeEnergyEfficiencyProgramEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "Milwaukee Energy Efficiency Program";
	// technically is "Me^2 Milwaukee Energy Efficiency Program"

	// single-family home, deplex, or triplex (units <= 3)
	// owner of building must be listed as an individual and not as a trust, LLC, or form of business
	// no delinquent property taxes due to the City of Milwaukee
	// work must be performed by a participating Me^2 contractor
	// no maximum income limits

	// to qualify for a Me^2 loan through Summit credit Union:
		// be employed for the past 12-24 months or have other stable income
		// have a debt-to-income ratio < 45%
		// applicants with "lower" credit scores must have longer recent employment histroy and lower oustanding debt obligations
}

function CheckForMilwaukeeShinesProgramEligibility() {
	let programOwner = "City of Milwaukee";
	let programName = "Milwaukee Shines Program";
	// must own and occupy home (1-3 unit residence)
	// must be current on property taxes
	// must meet loan underwriting guidelines for Summit Credit Union (not sure of location in packet)
	// work must be performed by a Focus on Energy Residential Ally solar installer (what??)
}

function CheckForWeatherizationProgramEligibility() {
	let programOwner = "Social Development Commission";
	let programName = "Weatherization Program";
	// must apply to SDC for Energy Assistance before applying to program (call 906-2800) (414 area code?)
	// the house/apartment unit may not have been previously weatherized
	// for rental properties, at least 50% of the buildings tenants must qualify for energy assistance
	// interested applicants cannot exceed the following income limits: *see packet page 14*
}

function CheckForNeighborhoodImprovementDistrictEligibility(owner) {
	let programName = "Neighborhood Improvement District";
	let programOwner = owner;
	if (programOwner === "ShermanPark") {
		// property must be owner occupied
		// property taxes must be current and the property may not be in litigation/subject to a condemnation action
		// program has different matching fund requirements depending on income
	}
	else if (programOwner === "Washington Park") {
		// property must be owner occupied
		// 25% match required from homeowner
	}
}

function CheckForRebuildingTogetherGreaterMilwaukeeEligibility() {
	let programOwner = "";
	let programName = "Rebuilding Together Greater Milwaukee";
	// homeowner must be 60 years of age or older and low-income OR a person living with a disability and low-income OR a veteran who is low-income
	// homeowner of a single family home or jointly owned duplex home where both owners live and qualify in Milwaukee or Waukesha County
		// no condos, apartments, rental property, partly rented duplexes or mobile homes
	// homeowner must have resided in and owned home for at least 5 years
	// homeowner must be current on properrty taxes or property tax installment payment plan
	// homeowner's property must not be held in trust or a life estate property
	// homeowner has not received repairs from RTGM in the past 2 years
		// this does not include emergency visits
	// homeowner must not own any other property
	// homeowner cannot have a daycare or any other home-based business operating in the residence
	// home must not be in foreclosure
	// household income must fall within low-income guidelines based on 50% County Mean Income Limits *see packet page 16*
}

function CheckForHomePreservationProgramEligibility() {
	let programOwner = "Milwaukee Habitat for Humanity";
	let programName = "Home Preservation Program";
	// proeprty must be owner occupied
	// must have stable source of income and a reasonable credit history
	// must be willing to perform sweat equity and complete financial education requirements
	// applicants must have household income less than 80% of Area Median Income *see packet page 17*
}

function CheckForLeadPoisoningPreventionProgramEligibility() {
	let programOwner = "City of Milwaukee Health Department";
	let programName = "Lead Poisoning Prevention Program";
	// property must have been built before 1950
	// for owner occupied properties, children under age 3 must reside in the property
	// must be current on property taxes or property tax installments
	// must not have any open building code violations
	// owner is willing to pay up to 20% of costs plus $57 permit fee
	// owner must be available for inspection with lead inspector
	// for rental properties, tenants must have income below 80% of Area Median Income *see packet page 21*
		// and property owner must agree to rent to income eligible families for at least three years after lead hazards are abated
}