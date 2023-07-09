import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect({ USER, setUser }) {
    // const [value, setValue] = React.useState(USER.country);
    const [inputValue, setInputValue] = React.useState(USER.country);

    return (
        <Autocomplete
            id="country-select-demo"
            fullWidth
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.name + " " + option.abbr}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        // loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.abbr.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.abbr.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.name}
                    {/* ({option.abbr}) +{option.code} */}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country *"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    fullWidth
                />

            )}
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            //     setUser({ ...USER, 'country': newValue });

            // }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                setUser({ ...USER, 'country': newInputValue });
            }}
        />
    );
}

const countries = [
    { name: 'Afghanistan', abbr: 'AF', code: '93' },
    { name: 'Alland Islands', abbr: 'AX', code: '358' },
    { name: 'Albania', abbr: 'AL', code: '355' },
    { name: 'Algeria', abbr: 'DZ', code: '213' },
    { name: 'American Samoa', abbr: 'AS', code: '1-684' },
    { name: 'Andorra', abbr: 'AD', code: '376' },
    { name: 'Angola', abbr: 'AO', code: '244' },
    { name: 'Anguilla', abbr: 'AI', code: '1-264' },
    { name: 'Antarctica', abbr: 'AQ', code: '672' },
    { name: 'Antigua and Barbuda', abbr: 'AG', code: '1-268' },
    { name: 'Argentina', abbr: 'AR', code: '54' },
    { name: 'Armenia', abbr: 'AM', code: '374' },
    { name: 'Aruba', abbr: 'AW', code: '297' },
    { name: 'Australia', abbr: 'AU', code: '61', suggested: true },
    { name: 'Austria', abbr: 'AT', code: '43' },
    { name: 'Azerbaijan', abbr: 'AZ', code: '994' },
    { name: 'Bahamas', abbr: 'BS', code: '1-242' },
    { name: 'Bahrain', abbr: 'BH', code: '973' },
    { name: 'Bangladesh', abbr: 'BD', code: '880' },
    { name: 'Barbados', abbr: 'BB', code: '1-246' },
    { name: 'Belarus', abbr: 'BY', code: '375' },
    { name: 'Belgium', abbr: 'BE', code: '32' },
    { name: 'Belize', abbr: 'BZ', code: '501' },
    { name: 'Benin', abbr: 'BJ', code: '229' },
    { name: 'Bermuda', abbr: 'BM', code: '1-441' },
    { name: 'Bhutan', abbr: 'BT', code: '975' },
    { name: 'Bolivia', abbr: 'BO', code: '591' },
    { name: 'Bosnia and Herzegovina', abbr: 'BA', code: '387' },
    { name: 'Botswana', abbr: 'BW', code: '267' },
    { name: 'Bouvet Island', abbr: 'BV', code: '47' },
    { name: 'Brazil', abbr: 'BR', code: '55' },
    {

        name: 'British Indian Ocean Territory',
        abbr: 'IO',
        code: '246',
    },
    { name: 'British Virgin Islands', abbr: 'VG', code: '1-284' },
    { name: 'Brunei Darussalam', abbr: 'BN', code: '673' },
    { name: 'Bulgaria', abbr: 'BG', code: '359' },
    { name: 'Burkina Faso', abbr: 'BF', code: '226' },
    { name: 'Burundi', abbr: 'BI', code: '257' },
    { name: 'Cambodia', abbr: 'KH', code: '855' },
    { name: 'Cameroon', abbr: 'CM', code: '237' },
    { name: 'Canada', abbr: 'CA', code: '1', suggested: true },
    { name: 'Cape Verde', abbr: 'CV', code: '238' },
    { name: 'Cayman Islands', abbr: 'KY', code: '1-345' },
    { name: 'Central African Republic', abbr: 'CF', code: '236' },
    { name: 'Chad', abbr: 'TD', code: '235' },
    { name: 'Chile', abbr: 'CL', code: '56' },
    { name: 'China', abbr: 'CN', code: '86' },
    { name: 'Christmas Island', abbr: 'CX', code: '61' },
    { name: 'Cocos (Keeling) Islands', abbr: 'CC', code: '61' },
    { name: 'Colombia', abbr: 'CO', code: '57' },
    { name: 'Comoros', abbr: 'KM', code: '269' },
    {

        name: 'Congo, Democratic Republic of the',
        abbr: 'CG',
        code: '243',
    },
    {

        name: 'Congo, Republic of the',
        abbr: 'CD',
        code: '242',
    },
    { name: 'Cook Islands', abbr: 'CK', code: '682' },
    { name: 'Costa Rica', abbr: 'CR', code: '506' },
    { name: "Cote d'Ivoire", abbr: 'CI', code: '225' },
    { name: 'Croatia', abbr: 'HR', code: '385' },
    { name: 'Cuba', abbr: 'CU', code: '53' },
    { name: 'Curacao', abbr: 'CW', code: '599' },
    { name: 'Cyprus', abbr: 'CY', code: '357' },
    { name: 'Czech Republic', abbr: 'CZ', code: '420' },
    { name: 'Denmark', abbr: 'DK', code: '45' },
    { name: 'Djibouti', abbr: 'DJ', code: '253' },
    { name: 'Dominica', abbr: 'DM', code: '1-767' },
    { name: 'Dominican Republic', abbr: 'DO', code: '1-809' },
    { name: 'Ecuador', abbr: 'EC', code: '593' },
    { name: 'Egypt', abbr: 'EG', code: '20' },
    { name: 'El Salvador', abbr: 'SV', code: '503' },
    { name: 'Equatorial Guinea', abbr: 'GQ', code: '240' },
    { name: 'Eritrea', abbr: 'ER', code: '291' },
    { name: 'Estonia', abbr: 'EE', code: '372' },
    { name: 'Ethiopia', abbr: 'ET', code: '251' },
    { name: 'Falkland Islands (Malvinas)', abbr: 'FK', code: '500' },
    { name: 'Faroe Islands', abbr: 'FO', code: '298' },
    { name: 'Fiji', abbr: 'FJ', code: '679' },
    { name: 'Finland', abbr: 'FI', code: '358' },
    { name: 'France', abbr: 'FR', code: '33', suggested: true },
    { name: 'French Guiana', abbr: 'GF', code: '594' },
    { name: 'French Polynesia', abbr: 'PF', code: '689' },
    { name: 'French Southern Territories', abbr: 'TF', code: '262' },
    { name: 'Gabon', abbr: 'GA', code: '241' },
    { name: 'Gambia', abbr: 'GM', code: '220' },
    { name: 'Georgia', abbr: 'GE', code: '995' },
    { name: 'Germany', abbr: 'DE', code: '49', suggested: true },
    { name: 'Ghana', abbr: 'GH', code: '233' },
    { name: 'Gibraltar', abbr: 'GI', code: '350' },
    { name: 'Greece', abbr: 'GR', code: '30' },
    { name: 'Greenland', abbr: 'GL', code: '299' },
    { name: 'Grenada', abbr: 'GD', code: '1-473' },
    { name: 'Guadeloupe', abbr: 'GP', code: '590' },
    { name: 'Guam', abbr: 'GU', code: '1-671' },
    { name: 'Guatemala', abbr: 'GT', code: '502' },
    { name: 'Guernsey', abbr: 'GG', code: '44' },
    { name: 'Guinea-Bissau', abbr: 'GW', code: '245' },
    { name: 'Guinea', abbr: 'GN', code: '224' },
    { name: 'Guyana', abbr: 'GY', code: '592' },
    { name: 'Haiti', abbr: 'HT', code: '509' },
    {

        name: 'Heard Island and McDonald Islands',
        abbr: 'HM',
        code: '672',
    },
    {

        name: 'Holy See (Vatican City State)',
        abbr: 'VA',
        code: '379',
    },
    { name: 'Honduras', abbr: 'HN', code: '504' },
    { name: 'Hong Kong', abbr: 'HK', code: '852' },
    { name: 'Hungary', abbr: 'HU', code: '36' },
    { name: 'Iceland', abbr: 'IS', code: '354' },
    { name: 'India', abbr: 'IN', code: '91' },
    { name: 'Indonesia', abbr: 'ID', code: '62' },
    { name: 'Iran, Islamic Republic of', abbr: 'IR', code: '98' },
    { name: 'Iraq', abbr: 'IQ', code: '964' },
    { name: 'Ireland', abbr: 'IE', code: '353' },
    { name: 'Isle of Man', abbr: 'IM', code: '44' },
    { name: 'Israel', abbr: 'IL', code: '972' },
    { name: 'Italy', abbr: 'IT', code: '39' },
    { name: 'Jamaica', abbr: 'JM', code: '1-876' },
    { name: 'Japan', abbr: 'JP', code: '81', suggested: true },
    { name: 'Jersey', abbr: 'JE', code: '44' },
    { name: 'Jordan', abbr: 'JO', code: '962' },
    { name: 'Kazakhstan', abbr: 'KZ', code: '7' },
    { name: 'Kenya', abbr: 'KE', code: '254' },
    { name: 'Kiribati', abbr: 'KI', code: '686' },
    {

        name: "Korea, Democratic People's Republic of",
        abbr: 'KP',
        code: '850',
    },
    { name: 'Korea, Republic of', abbr: 'KR', code: '82' },
    { name: 'Kosovo', abbr: 'XK', code: '383' },
    { name: 'Kuwait', abbr: 'KW', code: '965' },
    { name: 'Kyrgyzstan', abbr: 'KG', code: '996' },
    {

        name: "Lao People's Democratic Republic",
        abbr: 'LA',
        code: '856',
    },
    { name: 'Latvia', abbr: 'LV', code: '371' },
    { name: 'Lebanon', abbr: 'LB', code: '961' },
    { name: 'Lesotho', abbr: 'LS', code: '266' },
    { name: 'Liberia', abbr: 'LR', code: '231' },
    { name: 'Libya', abbr: 'LY', code: '218' },
    { name: 'Liechtenstein', abbr: 'LI', code: '423' },
    { name: 'Lithuania', abbr: 'LT', code: '370' },
    { name: 'Luxembourg', abbr: 'LU', code: '352' },
    { name: 'Macao', abbr: 'MO', code: '853' },
    {

        name: 'Macedonia, the Former Yugoslav Republic of',
        abbr: 'MK',
        code: '389',
    },
    { name: 'Madagascar', abbr: 'MG', code: '261' },
    { name: 'Malawi', abbr: 'MW', code: '265' },
    { name: 'Malaysia', abbr: 'MY', code: '60' },
    { name: 'Maldives', abbr: 'MV', code: '960' },
    { name: 'Mali', abbr: 'ML', code: '223' },
    { name: 'Malta', abbr: 'MT', code: '356' },
    { name: 'Marshall Islands', abbr: 'MH', code: '692' },
    { name: 'Martinique', abbr: 'MQ', code: '596' },
    { name: 'Mauritania', abbr: 'MR', code: '222' },
    { name: 'Mauritius', abbr: 'MU', code: '230' },
    { name: 'Mayotte', abbr: 'YT', code: '262' },
    { name: 'Mexico', abbr: 'MX', code: '52' },
    {

        name: 'Micronesia, Federated States of',
        abbr: 'FM',
        code: '691',
    },
    { name: 'Moldova, Republic of', abbr: 'MD', code: '373' },
    { name: 'Monaco', abbr: 'MC', code: '377' },
    { name: 'Mongolia', abbr: 'MN', code: '976' },
    { name: 'Montenegro', abbr: 'ME', code: '382' },
    { name: 'Montserrat', abbr: 'MS', code: '1-664' },
    { name: 'Morocco', abbr: 'MA', code: '212' },
    { name: 'Mozambique', abbr: 'MZ', code: '258' },
    { name: 'Myanmar', abbr: 'MM', code: '95' },
    { name: 'Namibia', abbr: 'NA', code: '264' },
    { name: 'Nauru', abbr: 'NR', code: '674' },
    { name: 'Nepal', abbr: 'NP', code: '977' },
    { name: 'Netherlands', abbr: 'NL', code: '31' },
    { name: 'New Caledonia', abbr: 'NC', code: '687' },
    { name: 'New Zealand', abbr: 'NZ', code: '64' },
    { name: 'Nicaragua', abbr: 'NI', code: '505' },
    { name: 'Niger', abbr: 'NE', code: '227' },
    { name: 'Nigeria', abbr: 'NG', code: '234' },
    { name: 'Niue', abbr: 'NU', code: '683' },
    { name: 'Norfolk Island', abbr: 'NF', code: '672' },
    { name: 'Northern Mariana Islands', abbr: 'MP', code: '1-670' },
    { name: 'Norway', abbr: 'NO', code: '47' },
    { name: 'Oman', abbr: 'OM', code: '968' },
    { name: 'Pakistan', abbr: 'PK', code: '92' },
    { name: 'Palau', abbr: 'PW', code: '680' },
    { name: 'Palestine, State of', abbr: 'PS', code: '970' },
    { name: 'Panama', abbr: 'PA', code: '507' },
    { name: 'Papua New Guinea', abbr: 'PG', code: '675' },
    { name: 'Paraguay', abbr: 'PY', code: '595' },
    { name: 'Peru', abbr: 'PE', code: '51' },
    { name: 'Philippines', abbr: 'PH', code: '63' },
    { name: 'Pitcairn', abbr: 'PN', code: '870' },
    { name: 'Poland', abbr: 'PL', code: '48' },
    { name: 'Portugal', abbr: 'PT', code: '351' },
    { name: 'Puerto Rico', abbr: 'PR', code: '1' },
    { name: 'Qatar', abbr: 'QA', code: '974' },
    { name: 'Reunion', abbr: 'RE', code: '262' },
    { name: 'Romania', abbr: 'RO', code: '40' },
    { name: 'Russian Federation', abbr: 'RU', code: '7' },
    { name: 'Rwanda', abbr: 'RW', code: '250' },
    { name: 'Saint Barthelemy', abbr: 'BL', code: '590' },
    { name: 'Saint Helena', abbr: 'SH', code: '290' },
    { name: 'Saint Kitts and Nevis', abbr: 'KN', code: '1-869' },
    { name: 'Saint Lucia', abbr: 'LC', code: '1-758' },
    { name: 'Saint Martin (French part)', abbr: 'MF', code: '590' },
    { name: 'Saint Pierre and Miquelon', abbr: 'PM', code: '508' },
    {

        name: 'Saint Vincent and the Grenadines',
        abbr: 'VC',
        code: '1-784',
    },
    { name: 'Samoa', abbr: 'WS', code: '685' },
    { name: 'San Marino', abbr: 'SM', code: '378' },
    { name: 'Sao Tome and Principe', abbr: 'ST', code: '239' },
    { name: 'Saudi Arabia', abbr: 'SA', code: '966' },
    { name: 'Senegal', abbr: 'SN', code: '221' },
    { name: 'Serbia', abbr: 'RS', code: '381' },
    { name: 'Seychelles', abbr: 'SC', code: '248' },
    { name: 'Sierra Leone', abbr: 'SL', code: '232' },
    { name: 'Singapore', abbr: 'SG', code: '65' },
    { name: 'Sint Maarten (Dutch part)', abbr: 'SX', code: '1-721' },
    { name: 'Slovakia', abbr: 'SK', code: '421' },
    { name: 'Slovenia', abbr: 'SI', code: '386' },
    { name: 'Solomon Islands', abbr: 'SB', code: '677' },
    { name: 'Somalia', abbr: 'SO', code: '252' },
    { name: 'South Africa', abbr: 'ZA', code: '27' },
    {

        name: 'South Georgia and the South Sandwich Islands',
        abbr: 'GS',
        code: '500',
    },
    { name: 'South Sudan', abbr: 'SS', code: '211' },
    { name: 'Spain', abbr: 'ES', code: '34' },
    { name: 'Sri Lanka', abbr: 'LK', code: '94' },
    { name: 'Sudan', abbr: 'SD', code: '249' },
    { name: 'Suriname', abbr: 'SR', code: '597' },
    { name: 'Svalbard and Jan Mayen', abbr: 'SJ', code: '47' },
    { name: 'Swaziland', abbr: 'SZ', code: '268' },
    { name: 'Sweden', abbr: 'SE', code: '46' },
    { name: 'Switzerland', abbr: 'CH', code: '41' },
    { name: 'Syrian Arab Republic', abbr: 'SY', code: '963' },
    { name: 'Taiwan, Province of China', abbr: 'TW', code: '886' },
    { name: 'Tajikistan', abbr: 'TJ', code: '992' },
    { name: 'Thailand', abbr: 'TH', code: '66' },
    { name: 'Timor-Leste', abbr: 'TL', code: '670' },
    { name: 'Togo', abbr: 'TG', code: '228' },
    { name: 'Tokelau', abbr: 'TK', code: '690' },
    { name: 'Tonga', abbr: 'TO', code: '676' },
    { name: 'Trinidad and Tobago', abbr: 'TT', code: '1-868' },
    { name: 'Tunisia', abbr: 'TN', code: '216' },
    { name: 'Turkey', abbr: 'TR', code: '90' },
    { name: 'Turkmenistan', abbr: 'TM', code: '993' },
    { name: 'Turks and Caicos Islands', abbr: 'TC', code: '1-649' },
    { name: 'Tuvalu', abbr: 'TV', code: '688' },
    { name: 'Uganda', abbr: 'UG', code: '256' },
    { name: 'Ukraine', abbr: 'UA', code: '380' },
    { name: 'United Arab Emirates', abbr: 'AE', code: '971' },
    { name: 'United Kingdom', abbr: 'GB', code: '44' },
    { name: 'United Republic of Tanzania', abbr: 'TZ', code: '255' },
    { name: 'United States', abbr: 'US', code: '1', suggested: true },
    { name: 'Uruguay', abbr: 'UY', code: '598' },
    { name: 'US Virgin Islands', abbr: 'VI', code: '1-340' },
    { name: 'Uzbekistan', abbr: 'UZ', code: '998' },
    { name: 'Vanuatu', abbr: 'VU', code: '678' },
    { name: 'Venezuela', abbr: 'VE', code: '58' },
    { name: 'Vietnam', abbr: 'VN', code: '84' },
    { name: 'Wallis and Futuna', abbr: 'WF', code: '681' },
    { name: 'Western Sahara', abbr: 'EH', code: '212' },
    { name: 'Yemen', abbr: 'YE', code: '967' },
    { name: 'Zambia', abbr: 'ZM', code: '260' },
    { name: 'Zimbabwe', abbr: 'ZW', code: '263' },
]