export interface State {
    /**
     * A state or province's 2-letter ISO abbrevation.
     */
    iso: string;
    /**
     * The state or province's full name.
     */
    name: string;
}

export interface Country {
    /**
     * The country's 2-letter ISO abbreviation.
     */
    iso: string;
    /**
     * The country's full name.
     */
    name: string;
    /**
     * Whether the country has postal or ZIP codes.
     */
    hasPostalCodes: boolean;
    /**
     * The country's states or provinces. Note: most countries do not have any states or provinces.
     */
    states: State[];
    /**
     * A regex to check if a given ZIP or postal code is a match for the country.
     */
    zipRegex: string | number;
}

export const countries: Country[] = [
    {
        iso: 'AF',
        name: 'Afghanistan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'AX',
        name: 'Åland Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'AL',
        name: 'Albania',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'DZ',
        name: 'Algeria',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'AS',
        name: 'American Samoa',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'AD',
        name: 'Andorra',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:AD)*(\\d{3})$"
    },
    {
        iso: 'AO',
        name: 'Angola',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'AI',
        name: 'Anguilla',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(AI-2640)$"
    },
    {
        iso: 'AQ',
        name: 'Antarctica',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(7151)$"
    },
    {
        iso: 'AG',
        name: 'Antigua and Barbuda',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'AR',
        name: 'Argentina',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})$"
    },
    {
        iso: 'AM',
        name: 'Armenia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'AW',
        name: 'Aruba',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(0000 AW)$"
    },
    {
        iso: 'AU',
        name: 'Australia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'AT',
        name: 'Austria',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'AZ',
        name: 'Azerbaijan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(AZ) (\\d{4})$"
    },
    {
        iso: 'BS',
        name: 'Bahamas',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BH',
        name: 'Bahrain',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3}\\d?)$"
    },
    {
        iso: 'BD',
        name: 'Bangladesh',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'BB',
        name: 'Barbados',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:BB)*(\\d{5})$"
    },
    {
        iso: 'BY',
        name: 'Belarus',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'BE',
        name: 'Belgium',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'BZ',
        name: 'Belize',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BJ',
        name: 'Benin',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BM',
        name: 'Bermuda',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^([A-Z]{2} \\d{2})$"
    },
    {
        iso: 'BT',
        name: 'Bhutan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'BO',
        name: 'Bolivia, Plurinational State of',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BQ',
        name: 'Bonaire, Sint Eustatius and Saba',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(0000 BQ)$"
    },
    {
        iso: 'BA',
        name: 'Bosnia and Herzegovina',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'BW',
        name: 'Botswana',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BV',
        name: 'Bouvet Island',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BR',
        name: 'Brazil',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[0-9]{5}-[0-9]{3}$"
    },
    {
        iso: 'IO',
        name: 'British Indian Ocean Territory',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(BB9D 1ZZ)$"
    },
    {
        iso: 'BN',
        name: 'Brunei Darussalam',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^([A-Z]{2}\\d{4})$"
    },
    {
        iso: 'BG',
        name: 'Bulgaria',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'BF',
        name: 'Burkina Faso',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BI',
        name: 'Burundi',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'KH',
        name: 'Cambodia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'CM',
        name: 'Cameroon',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'CA',
        name: 'Canada',
        hasPostalCodes: true,
        states:
        [
            { iso: 'AB', name: 'Alberta' },
            { iso: 'BC', name: 'British Columbia' },
            { iso: 'MB', name: 'Manitoba' },
            { iso: 'NB', name: 'New Brunswick' },
            { iso: 'NL', name: 'Newfoundland and Labrador' },
            { iso: 'NS', name: 'Nova Scotia' },
            { iso: 'NT', name: 'Northwest Territories' },
            { iso: 'NU', name: 'Nunavut' },
            { iso: 'ON', name: 'Ontario' },
            { iso: 'PE', name: 'Prince Edward Island' },
            { iso: 'QC', name: 'Quebec' },
            { iso: 'SK', name: 'Saskatchewan' },
            { iso: 'YT', name: 'Yukon' }
        ],
        zipRegex: "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] +?[0-9][A-Z][0-9]$"
    },
    {
        iso: 'CV',
        name: 'Cape Verde',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'KY',
        name: 'Cayman Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[K][Y][0-9]{1}[-]([0-9]){4}$"
    },
    {
        iso: 'CF',
        name: 'Central African Republic',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TD',
        name: 'Chad',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'CL',
        name: 'Chile',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{7})$"
    },
    {
        iso: 'CN',
        name: 'China',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'CX',
        name: 'Christmas Island',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(6978)$"
    },
    {
        iso: 'CC',
        name: 'Cocos (Keeling) Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(6799 W3)$"
    },
    {
        iso: 'CO',
        name: 'Colombia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'KM',
        name: 'Comoros',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'CG',
        name: 'Congo',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'CD',
        name: 'Congo, the Democratic Republic of the',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'CK',
        name: 'Cook Islands',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'CR',
        name: 'Costa Rica',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'CI',
        name: 'Côte d\'Ivoire',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'HR',
        name: 'Croatia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:HR)*(\\d{5})$"
    },
    {
        iso: 'CU',
        name: 'Cuba',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:CP)*(\\d{5})$"
    },
    {
        iso: 'CW',
        name: 'Curaçao',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(0000 CW)$"
    },
    {
        iso: 'CY',
        name: 'Cyprus',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'CZ',
        name: 'Czech Republic',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[0-9]{3} [0-9]{2}$"
    },
    {
        iso: 'DK',
        name: 'Denmark',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'DJ',
        name: 'Djibouti',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'DM',
        name: 'Dominica',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'DO',
        name: 'Dominican Republic',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'EC',
        name: 'Ecuador',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'EG',
        name: 'Egypt',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SV',
        name: 'El Salvador',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(01101)$"
    },
    {
        iso: 'GQ',
        name: 'Equatorial Guinea',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'ER',
        name: 'Eritrea',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'EE',
        name: 'Estonia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'ET',
        name: 'Ethiopia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'FK',
        name: 'Falkland Islands (Malvinas)',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(FIQQ 1ZZ)$"
    },
    {
        iso: 'FO',
        name: 'Faroe Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:FO)*(\\d{3})$"
    },
    {
        iso: 'FJ',
        name: 'Fiji',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'FI',
        name: 'Finland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:FI)*(\\d{5})$"
    },
    {
        iso: 'FR',
        name: 'France',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'GF',
        name: 'French Guiana',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^((973)\\d{2})$"
    },
    {
        iso: 'PF',
        name: 'French Polynesia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^((987)\\d{2})$"
    },
    {
        iso: 'TF',
        name: 'French Southern Territories',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^((984)\\d{2})$"
    },
    {
        iso: 'GA',
        name: 'Gabon',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'GM',
        name: 'Gambia',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'GE',
        name: 'Georgia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'DE',
        name: 'Germany',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'GH',
        name: 'Ghana',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'GI',
        name: 'Gibraltar',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(GX11 1AA)$"
    },
    {
        iso: 'GR',
        name: 'Greece',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3}) \\d{2}$"
    },
    {
        iso: 'GL',
        name: 'Greenland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'GD',
        name: 'Grenada',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'GP',
        name: 'Guadeloupe',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^((971)[0-9][0-0])$"
    },
    {
        iso: 'GU',
        name: 'Guam',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^((969)[1-3][0-2])$"
    },
    {
        iso: 'GT',
        name: 'Guatemala',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'GG',
        name: 'Guernsey',
        hasPostalCodes: true,
        states: [],
        zipRegex: "((GY)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        iso: 'GN',
        name: 'Guinea',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'GW',
        name: 'Guinea-Bissau',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'GY',
        name: 'Guyana',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'HT',
        name: 'Haiti',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:HT)*(\\d{4})$"
    },
    {
        iso: 'HM',
        name: 'Heard Island and McDonald Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(7151)$"
    },
    {
        iso: 'VA',
        name: 'Holy See (Vatican City State)',
        hasPostalCodes: true,
        states: [],
        zipRegex: -120
    },
    {
        iso: 'HN',
        name: 'Honduras',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'HK',
        name: 'Hong Kong',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(999077)$"
    },
    {
        iso: 'HU',
        name: 'Hungary',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'IS',
        name: 'Iceland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'IN',
        name: 'India',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'ID',
        name: 'Indonesia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'IR',
        name: 'Iran, Islamic Republic of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^\\d{5}([\\-]\\d{5})?$"
    },
    {
        iso: 'IQ',
        name: 'Iraq',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'IE',
        name: 'Ireland',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'IM',
        name: 'Isle of Man',
        hasPostalCodes: true,
        states: [],
        zipRegex: "((IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        iso: 'IL',
        name: 'Israel',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'IT',
        name: 'Italy',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'JM',
        name: 'Jamaica',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^((JM)[A-Z]{3,3}\\d{2,2})$"
    },
    {
        iso: 'JP',
        name: 'Japan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3}-\\d{4})$"
    },
    {
        iso: 'JE',
        name: 'Jersey',
        hasPostalCodes: true,
        states: [],
        zipRegex: "(JE)([0-9]\\d{1})"
    },
    {
        iso: 'JO',
        name: 'Jordan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'KZ',
        name: 'Kazakhstan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'KE',
        name: 'Kenya',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'KI',
        name: 'Kiribati',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'KP',
        name: 'Korea, Democratic People\'s Republic of',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'KR',
        name: 'Korea, Republic of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3}[-]\\d{3})$"
    },
    {
        iso: 'KW',
        name: 'Kuwait',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'KG',
        name: 'Kyrgyzstan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'LA',
        name: 'Lao People\'s Democratic Republic',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'LV',
        name: 'Latvia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[L]{1}[V]{1}[-]([0-9]){4}$"
    },
    {
        iso: 'LB',
        name: 'Lebanon',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4}(\\d{4})?)$"
    },
    {
        iso: 'LS',
        name: 'Lesotho',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'LR',
        name: 'Liberia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'LY',
        name: 'Libya',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'LI',
        name: 'Liechtenstein',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'LT',
        name: 'Lithuania',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:LT)*(\\d{5})$"
    },
    {
        iso: 'LU',
        name: 'Luxembourg',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'MO',
        name: 'Macao',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MK',
        name: 'Macedonia, the Former Yugoslav Republic of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'MG',
        name: 'Madagascar',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'MW',
        name: 'Malawi',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MY',
        name: 'Malaysia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MV',
        name: 'Maldives',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'ML',
        name: 'Mali',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MT',
        name: 'Malta',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[A-Z]{3} [0-9]{4}$"
    },
    {
        iso: 'MH',
        name: 'Marshall Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^((969)[6-7][0-9])$"
    },
    {
        iso: 'MQ',
        name: 'Martinique',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MR',
        name: 'Mauritania',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MU',
        name: 'Mauritius',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^([0-9A-Z]\\d{4})$"
    },
    {
        iso: 'YT',
        name: 'Mayotte',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MX',
        name: 'Mexico',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'FM',
        name: 'Micronesia, Federated States of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MD',
        name: 'Moldova, Republic of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(?:MD)*(\\d{4})$"
    },
    {
        iso: 'MC',
        name: 'Monaco',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MN',
        name: 'Mongolia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'ME',
        name: 'Montenegro',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MS',
        name: 'Montserrat',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MA',
        name: 'Morocco',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'MZ',
        name: 'Mozambique',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'MM',
        name: 'Myanmar',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'NA',
        name: 'Namibia',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'NR',
        name: 'Nauru',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'NP',
        name: 'Nepal',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'NL',
        name: 'Netherlands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "[0-9]{4} [A-Z]{2}"
    },
    {
        iso: 'NC',
        name: 'New Caledonia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'NZ',
        name: 'New Zealand',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'NI',
        name: 'Nicaragua',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'NE',
        name: 'Niger',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'NG',
        name: 'Nigeria',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'NU',
        name: 'Niue',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'NF',
        name: 'Norfolk Island',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(2899)$"
    },
    {
        iso: 'MP',
        name: 'Northern Mariana Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'NO',
        name: 'Norway',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'OM',
        name: 'Oman',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'PK',
        name: 'Pakistan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'PW',
        name: 'Palau',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(96940)$"
    },
    {
        iso: 'PS',
        name: 'Palestine, State of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'PA',
        name: 'Panama',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'PG',
        name: 'Papua New Guinea',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'PY',
        name: 'Paraguay',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'PE',
        name: 'Peru',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'PH',
        name: 'Philippines',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'PN',
        name: 'Pitcairn',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(PCR9 1ZZ)$"
    },
    {
        iso: 'PL',
        name: 'Poland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[0-9]{2}[-]([0-9]){3}$"
    },
    {
        iso: 'PT',
        name: 'Portugal',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^\\d{4}((-|\\s)?\\d{3})?$"
    },
    {
        iso: 'PR',
        name: 'Puerto Rico',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^\\d{5}((-|\\s)?\\d{4})?$"
    },
    {
        iso: 'QA',
        name: 'Qatar',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'RE',
        name: 'Réunion',
        hasPostalCodes: true,
        states: [],
        zipRegex: "[9]{1}[7|8][4|7|8]\\d{2}"
    },
    {
        iso: 'RO',
        name: 'Romania',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'RU',
        name: 'Russian Federation',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'RW',
        name: 'Rwanda',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'BL',
        name: 'Saint Barthélemy',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SH',
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^[A-Z]{4} (1ZZ)$"
    },
    {
        iso: 'KN',
        name: 'Saint Kitts and Nevis',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'LC',
        name: 'Saint Lucia',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'MF',
        name: 'Saint Martin (French part)',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'PM',
        name: 'Saint Pierre and Miquelon',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'VC',
        name: 'Saint Vincent and the Grenadines',
        hasPostalCodes: true,
        states: [],
        zipRegex: "(VC)(\\d{4})"
    },
    {
        iso: 'WS',
        name: 'Samoa',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SM',
        name: 'San Marino',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(4789\\d)$"
    },
    {
        iso: 'ST',
        name: 'Sao Tome and Principe',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SA',
        name: 'Saudi Arabia',
        hasPostalCodes: false,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SN',
        name: 'Senegal',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'RS',
        name: 'Serbia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SC',
        name: 'Seychelles',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SL',
        name: 'Sierra Leone',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SG',
        name: 'Singapore',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'SX',
        name: 'Sint Maarten (Dutch part)',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(0000 AA)$"
    },
    {
        iso: 'SK',
        name: 'Slovakia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3} \\d{2})$"
    },
    {
        iso: 'SI',
        name: 'Slovenia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'SB',
        name: 'Solomon Islands',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SO',
        name: 'Somalia',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'ZA',
        name: 'South Africa',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'GS',
        name: 'South Georgia and the South Sandwich Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(SIQQ 1ZZ)$"
    },
    {
        iso: 'SS',
        name: 'South Sudan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'ES',
        name: 'Spain',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'LK',
        name: 'Sri Lanka',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SD',
        name: 'Sudan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'SR',
        name: 'Suriname',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'SJ',
        name: 'Svalbard and Jan Mayen',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'SZ',
        name: 'Swaziland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^([A-Z]\\d{3})$"
    },
    {
        iso: 'SE',
        name: 'Sweden',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3} \\d{2})$"
    },
    {
        iso: 'CH',
        name: 'Switzerland',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'SY',
        name: 'Syrian Arab Republic',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TW',
        name: 'Taiwan, Province of China',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3} \\d{2})|(\\d{3})$"
    },
    {
        iso: 'TJ',
        name: 'Tajikistan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{3})$"
    },
    {
        iso: 'TZ',
        name: 'Tanzania, United Republic of',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TH',
        name: 'Thailand',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'TL',
        name: 'Timor-Leste',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TG',
        name: 'Togo',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TK',
        name: 'Tokelau',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TO',
        name: 'Tonga',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TT',
        name: 'Trinidad and Tobago',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'TN',
        name: 'Tunisia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'TR',
        name: 'Turkey',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'TM',
        name: 'Turkmenistan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'TC',
        name: 'Turks and Caicos Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(TKCA 1ZZ)$"
    },
    {
        iso: 'TV',
        name: 'Tuvalu',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'UG',
        name: 'Uganda',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'UA',
        name: 'Ukraine',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'AE',
        name: 'United Arab Emirates',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'GB',
        name: 'United Kingdom',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(((([A-PR-UWYZ][0-9][0-9A-HJKS-UW]?)|([A-PR-UWYZ][A-HK-Y][0-9][0-9ABEHMNPRV-Y]?))\\s{0,2}[0-9]([ABD-HJLNP-UW-Z]{2}))|(GIR\\s{0,2}0AA))$"
    },
    {
        iso: 'US',
        name: 'United States',
        hasPostalCodes: true,
        states:
        [
            { iso: 'AL', name: 'Alabama' },
            { iso: 'AK', name: 'Alaska' },
            { iso: 'AZ', name: 'Arizona' },
            { iso: 'AR', name: 'Arkansas' },
            { iso: 'CA', name: 'California' },
            { iso: 'CO', name: 'Colorado' },
            { iso: 'CT', name: 'Connecticut' },
            { iso: 'DE', name: 'Delaware' },
            { iso: 'DC', name: 'District Of Columbia' },
            { iso: 'FL', name: 'Florida' },
            { iso: 'GA', name: 'Georgia' },
            { iso: 'HI', name: 'Hawaii' },
            { iso: 'ID', name: 'Idaho' },
            { iso: 'IL', name: 'Illinois' },
            { iso: 'IN', name: 'Indiana' },
            { iso: 'IA', name: 'Iowa' },
            { iso: 'KS', name: 'Kansas' },
            { iso: 'KY', name: 'Kentucky' },
            { iso: 'LA', name: 'Louisiana' },
            { iso: 'ME', name: 'Maine' },
            { iso: 'MD', name: 'Maryland' },
            { iso: 'MA', name: 'Massachusetts' },
            { iso: 'MI', name: 'Michigan' },
            { iso: 'MN', name: 'Minnesota' },
            { iso: 'MS', name: 'Mississippi' },
            { iso: 'MO', name: 'Missouri' },
            { iso: 'MT', name: 'Montana' },
            { iso: 'NE', name: 'Nebraska' },
            { iso: 'NV', name: 'Nevada' },
            { iso: 'NH', name: 'New Hampshire' },
            { iso: 'NJ', name: 'New Jersey' },
            { iso: 'NM', name: 'New Mexico' },
            { iso: 'NY', name: 'New York' },
            { iso: 'NC', name: 'North Carolina' },
            { iso: 'ND', name: 'North Dakota' },
            { iso: 'OH', name: 'Ohio' },
            { iso: 'OK', name: 'Oklahoma' },
            { iso: 'OR', name: 'Oregon' },
            { iso: 'PA', name: 'Pennsylvania' },
            { iso: 'RI', name: 'Rhode Island' },
            { iso: 'SC', name: 'South Carolina' },
            { iso: 'SD', name: 'South Dakota' },
            { iso: 'TN', name: 'Tennessee' },
            { iso: 'TX', name: 'Texas' },
            { iso: 'UT', name: 'Utah' },
            { iso: 'VT', name: 'Vermont' },
            { iso: 'VA', name: 'Virginia' },
            { iso: 'WA', name: 'Washington' },
            { iso: 'WV', name: 'West Virginia' },
            { iso: 'WI', name: 'Wisconsin' },
            { iso: 'WY', name: 'Wyoming' }
        ],
        zipRegex: "^\\d{5}([\\-]\\d{4})?$"
    },
    {
        iso: 'UM',
        name: 'United States Minor Outlying Islands',
        hasPostalCodes: true,
        states: [],
        zipRegex: undefined
    },
    {
        iso: 'UY',
        name: 'Uruguay',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'UZ',
        name: 'Uzbekistan',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'VU',
        name: 'Vanuatu',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'VE',
        name: 'Venezuela, Bolivarian Republic of',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{4})$"
    },
    {
        iso: 'VN',
        name: 'Viet Nam',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{6})$"
    },
    {
        iso: 'VG',
        name: 'Virgin Islands, British',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(VG11)[0-6][0]$"
    },
    {
        iso: 'VI',
        name: 'Virgin Islands, U.S.',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'WF',
        name: 'Wallis and Futuna',
        hasPostalCodes: true,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'EH',
        name: 'Western Sahara',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'YE',
        name: 'Yemen',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    },
    {
        iso: 'ZM',
        name: 'Zambia',
        hasPostalCodes: true,
        states: [],
        zipRegex: "^(\\d{5})$"
    },
    {
        iso: 'ZW',
        name: 'Zimbabwe',
        hasPostalCodes: false,
        states: [],
        zipRegex: 0
    }
]

export default countries;