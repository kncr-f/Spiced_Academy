(function (countries) {

    //console.log('countries :', countries)

    var search = $('input');

    search.on('input', function (e) {
        //console.log("lasjdflaskdjf")

        var userInput = $(e.target).val().toLowerCase();
        //console.log(userInput);

        var matchingCountries = [];
        for (var i = 0; i < countries.length; i++) {
            //console.log(i, countries[i])

            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                //console.log(countries[i])

                matchingCountries.push(countries[i])

            }

            if (matchingCountries.length >= 4) {
                break;
            }
        }

        // var matchingCountries = countries.filter(function (country) {
        //     return country.toLowerCase().indexOf(userInput) === 0;
        // })

        // if (countries[i].toLowerCase().indexOf(userInput) === -1) {
        //     console.log("no match")
        // })

        var resultHtml = '';


        if (matchingCountries.length <= 0) {
            var noResult = '<p style="width:100px; color: red">  NO result!!! </p>'
            $('.result').html(noResult);
        } else {

            for (var j = 0; j < matchingCountries.length; j++) {
                resultHtml += '<p style="width:200px; text-align:center; font-size:18px">' + matchingCountries[j] + '</p>'
            }
            //console.log($('.result'))
            $('.result').html(resultHtml);
            // console.log($(".result").children().eq(1))
            // $(".result").children().eq(1).addClass('.highlight')

        }

        if (userInput.length == 0) {

            $('.result').css({
                visibility: "hidden"
            })
        } else if (userInput.length > 0) {
            $('.result').css({
                visibility: "visible"
            })
        }

    })

    $(document).on("keydown", function (e) {
        //console.log(e.target.value)
        if (e.keyCode === 40) {
            if (!$("p").hasClass("highlight")) {
                $("p").first().addClass('highlight')
            } else if ($("p").last().hasClass("highlight")) {
                return
            } else {
                var currentElement = $("p.highlight")
                console.log(currentElement)

                currentElement.removeClass('highlight')

                currentElement.next().addClass('highlight')

            }

        }

        if (e.keyCode === 38) {
            // console.log("fisrt has highlight ? ", $("p").first().hasClass("highlight"))
            if ($("p").first().hasClass("highlight")) {
                return
            } else if (!$("p").hasClass("highlight")) {
                return
            } else {
                var myElement = $("p.highlight")
                console.log(myElement)
                myElement.removeClass("highlight")
                myElement.prev().addClass("highlight")

            }
            // $(".result").children().eq(1).removeClass('highlight')
            // console.log("up")
        }

        if (e.keyCode === 13) {
            $('.result').css({
                visibility: "hidden"
            })
            // $('#input').val(e.target.innerHTML)
            // console.log(e.target.innerHTML, 45)
            //console.log(e.target)
            var myResult = $("p.highlight")[0].innerHTML
            // console.log(myResult)
            e.target.value = myResult
        }

    })

    var result = $('.result')

    //console.log(result);

    result.on("mouseover", "p", function (e) {
        $('p').removeClass('highlight')
        //result.find(e.target).addClass('highlight')       
        $(e.target).addClass("highlight")

    })


    result.on("mouseleave", "p", function (e) {
        //result.find(e.target).removeClass('highlight')
        $(e.target).removeClass('highlight')

    })

    result.on("mousedown", "p", function (e) {

        $('.result').css({
            visibility: "hidden"
        })

        $('#input').val(e.target.innerHTML)

    })

    $("input").on('blur', function (e) {

        $('.result').css({
            visibility: "hidden"
        })

    });

    $("input").on('focus', function (e) {

        $('.result').css({
            visibility: "visible"
        })

    });



})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]
)

