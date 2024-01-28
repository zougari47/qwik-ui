// NOT TO BE USED DIRECTLY: it's a convenience object for improving global.css

export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: {
    hex: '#000000',
    rgb: '0 0 0',
    hsl: '0 0% 0%',
  },
  white: {
    hex: '#ffffff',
    rgb: '255 255 255',
    hsl: '0 0% 100%',
  },
  slate: [
    {
      scale: 50,
      hex: '#f8fafc',
      rgb: '248 250 252',
      hsl: '210 40% 98%',
    },
    {
      scale: 100,
      hex: '#f1f5f9',
      rgb: '241 245 249',
      hsl: '210 40% 96.1%',
    },
    {
      scale: 200,
      hex: '#e2e8f0',
      rgb: '226 232 240',
      hsl: '214.3 31.8% 91.4%',
    },
    {
      scale: 300,
      hex: '#cbd5e1',
      rgb: '203 213 225',
      hsl: '212.7 26.8% 83.9%',
    },
    {
      scale: 400,
      hex: '#94a3b8',
      rgb: '148 163 184',
      hsl: '215 20.2% 65.1%',
    },
    {
      scale: 500,
      hex: '#64748b',
      rgb: '100 116 139',
      hsl: '215.4 16.3% 46.9%',
    },
    {
      scale: 600,
      hex: '#475569',
      rgb: '71 85 105',
      hsl: '215.3 19.3% 34.5%',
    },
    {
      scale: 700,
      hex: '#334155',
      rgb: '51 65 85',
      hsl: '215.3 25% 26.7%',
    },
    {
      scale: 800,
      hex: '#1e293b',
      rgb: '30 41 59',
      hsl: '217.2 32.6% 17.5%',
    },
    {
      scale: 900,
      hex: '#0f172a',
      rgb: '15 23 42',
      hsl: '222.2 47.4% 11.2%',
    },
    {
      scale: 950,
      hex: '#020617',
      rgb: '2 6 23',
      hsl: '222.2 84% 4.9%',
    },
  ],
  gray: [
    {
      scale: 50,
      hex: '#f9fafb',
      rgb: '249 250 251',
      hsl: '210 20% 98%',
    },
    {
      scale: 100,
      hex: '#f3f4f6',
      rgb: '243 244 246',
      hsl: '220 14.3% 95.9%',
    },
    {
      scale: 200,
      hex: '#e5e7eb',
      rgb: '229 231 235',
      hsl: '220 13% 91%',
    },
    {
      scale: 300,
      hex: '#d1d5db',
      rgb: '209 213 219',
      hsl: '216 12.2% 83.9%',
    },
    {
      scale: 400,
      hex: '#9ca3af',
      rgb: '156 163 175',
      hsl: '217.9 10.6% 64.9%',
    },
    {
      scale: 500,
      hex: '#6b7280',
      rgb: '107 114 128',
      hsl: '220 8.9% 46.1%',
    },
    {
      scale: 600,
      hex: '#4b5563',
      rgb: '75 85 99',
      hsl: '215 13.8% 34.1%',
    },
    {
      scale: 700,
      hex: '#374151',
      rgb: '55 65 81',
      hsl: '216.9 19.1% 26.7%',
    },
    {
      scale: 800,
      hex: '#1f2937',
      rgb: '31 41 55',
      hsl: '215 27.9% 16.9%',
    },
    {
      scale: 900,
      hex: '#111827',
      rgb: '17 24 39',
      hsl: '220.9 39.3% 11%',
    },
    {
      scale: 950,
      hex: '#030712',
      rgb: '3 7 18',
      hsl: '224 71.4% 4.1%',
    },
  ],
  zinc: [
    {
      scale: 50,
      hex: '#fafafa',
      rgb: '250 250 250',
      hsl: '0 0% 98%',
    },
    {
      scale: 100,
      hex: '#f4f4f5',
      rgb: '244 244 245',
      hsl: '240 4.8% 95.9%',
    },
    {
      scale: 200,
      hex: '#e4e4e7',
      rgb: '228 228 231',
      hsl: '240 5.9% 90%',
    },
    {
      scale: 300,
      hex: '#d4d4d8',
      rgb: '212 212 216',
      hsl: '240 4.9% 83.9%',
    },
    {
      scale: 400,
      hex: '#a1a1aa',
      rgb: '161 161 170',
      hsl: '240 5% 64.9%',
    },
    {
      scale: 500,
      hex: '#71717a',
      rgb: '113 113 122',
      hsl: '240 3.8% 46.1%',
    },
    {
      scale: 600,
      hex: '#52525b',
      rgb: '82 82 91',
      hsl: '240 5.2% 33.9%',
    },
    {
      scale: 700,
      hex: '#3f3f46',
      rgb: '63 63 70',
      hsl: '240 5.3% 26.1%',
    },
    {
      scale: 800,
      hex: '#27272a',
      rgb: '39 39 42',
      hsl: '240 3.7% 15.9%',
    },
    {
      scale: 900,
      hex: '#18181b',
      rgb: '24 24 27',
      hsl: '240 5.9% 10%',
    },
    {
      scale: 950,
      hex: '#09090b',
      rgb: '9 9 11',
      hsl: '240 10% 3.9%',
    },
  ],
  neutral: [
    {
      scale: 50,
      hex: '#fafafa',
      rgb: '250 250 250',
      hsl: '0 0% 98%',
    },
    {
      scale: 100,
      hex: '#f5f5f5',
      rgb: '245 245 245',
      hsl: '0 0% 96.1%',
    },
    {
      scale: 200,
      hex: '#e5e5e5',
      rgb: '229 229 229',
      hsl: '0 0% 89.8%',
    },
    {
      scale: 300,
      hex: '#d4d4d4',
      rgb: '212 212 212',
      hsl: '0 0% 83.1%',
    },
    {
      scale: 400,
      hex: '#a3a3a3',
      rgb: '163 163 163',
      hsl: '0 0% 63.9%',
    },
    {
      scale: 500,
      hex: '#737373',
      rgb: '115 115 115',
      hsl: '0 0% 45.1%',
    },
    {
      scale: 600,
      hex: '#525252',
      rgb: '82 82 82',
      hsl: '0 0% 32.2%',
    },
    {
      scale: 700,
      hex: '#404040',
      rgb: '64 64 64',
      hsl: '0 0% 25.1%',
    },
    {
      scale: 800,
      hex: '#262626',
      rgb: '38 38 38',
      hsl: '0 0% 14.9%',
    },
    {
      scale: 900,
      hex: '#171717',
      rgb: '23 23 23',
      hsl: '0 0% 9%',
    },
    {
      scale: 950,
      hex: '#0a0a0a',
      rgb: '10 10 10',
      hsl: '0 0% 3.9%',
    },
  ],
  stone: [
    {
      scale: 50,
      hex: '#fafaf9',
      rgb: '250 250 249',
      hsl: '60 9.1% 97.8%',
    },
    {
      scale: 100,
      hex: '#f5f5f4',
      rgb: '245 245 244',
      hsl: '60 4.8% 95.9%',
    },
    {
      scale: 200,
      hex: '#e7e5e4',
      rgb: '231 229 228',
      hsl: '20 5.9% 90%',
    },
    {
      scale: 300,
      hex: '#d6d3d1',
      rgb: '214 211 209',
      hsl: '24 5.7% 82.9%',
    },
    {
      scale: 400,
      hex: '#a8a29e',
      rgb: '168 162 158',
      hsl: '24 5.4% 63.9%',
    },
    {
      scale: 500,
      hex: '#78716c',
      rgb: '120 113 108',
      hsl: '25 5.3% 44.7%',
    },
    {
      scale: 600,
      hex: '#57534e',
      rgb: '87 83 78',
      hsl: '33.3 5.5% 32.4%',
    },
    {
      scale: 700,
      hex: '#44403c',
      rgb: '68 64 60',
      hsl: '30 6.3% 25.1%',
    },
    {
      scale: 800,
      hex: '#292524',
      rgb: '41 37 36',
      hsl: '12 6.5% 15.1%',
    },
    {
      scale: 900,
      hex: '#1c1917',
      rgb: '28 25 23',
      hsl: '24 9.8% 10%',
    },
    {
      scale: 950,
      hex: '#0c0a09',
      rgb: '12 10 9',
      hsl: '20 14.3% 4.1%',
    },
  ],
  red: [
    {
      scale: 50,
      hex: '#fef2f2',
      rgb: '254 242 242',
      hsl: '0 85.7% 97.3%',
    },
    {
      scale: 100,
      hex: '#fee2e2',
      rgb: '254 226 226',
      hsl: '0 93.3% 94.1%',
    },
    {
      scale: 200,
      hex: '#fecaca',
      rgb: '254 202 202',
      hsl: '0 96.3% 89.4%',
    },
    {
      scale: 300,
      hex: '#fca5a5',
      rgb: '252 165 165',
      hsl: '0 93.5% 81.8%',
    },
    {
      scale: 400,
      hex: '#f87171',
      rgb: '248 113 113',
      hsl: '0 90.6% 70.8%',
    },
    {
      scale: 500,
      hex: '#ef4444',
      rgb: '239 68 68',
      hsl: '0 84.2% 60.2%',
    },
    {
      scale: 600,
      hex: '#dc2626',
      rgb: '220 38 38',
      hsl: '0 72.2% 50.6%',
    },
    {
      scale: 700,
      hex: '#b91c1c',
      rgb: '185 28 28',
      hsl: '0 73.7% 41.8%',
    },
    {
      scale: 800,
      hex: '#991b1b',
      rgb: '153 27 27',
      hsl: '0 70% 35.3%',
    },
    {
      scale: 900,
      hex: '#7f1d1d',
      rgb: '127 29 29',
      hsl: '0 62.8% 30.6%',
    },
    {
      scale: 950,
      hex: '#450a0a',
      rgb: '69 10 10',
      hsl: '0 74.7% 15.5%',
    },
  ],
  orange: [
    {
      scale: 50,
      hex: '#fff7ed',
      rgb: '255 247 237',
      hsl: '33.3 100% 96.5%',
    },
    {
      scale: 100,
      hex: '#ffedd5',
      rgb: '255 237 213',
      hsl: '34.3 100% 91.8%',
    },
    {
      scale: 200,
      hex: '#fed7aa',
      rgb: '254 215 170',
      hsl: '32.1 97.7% 83.1%',
    },
    {
      scale: 300,
      hex: '#fdba74',
      rgb: '253 186 116',
      hsl: '30.7 97.2% 72.4%',
    },
    {
      scale: 400,
      hex: '#fb923c',
      rgb: '251 146 60',
      hsl: '27 96% 61%',
    },
    {
      scale: 500,
      hex: '#f97316',
      rgb: '249 115 22',
      hsl: '24.6 95% 53.1%',
    },
    {
      scale: 600,
      hex: '#ea580c',
      rgb: '234 88 12',
      hsl: '20.5 90.2% 48.2%',
    },
    {
      scale: 700,
      hex: '#c2410c',
      rgb: '194 65 12',
      hsl: '17.5 88.3% 40.4%',
    },
    {
      scale: 800,
      hex: '#9a3412',
      rgb: '154 52 18',
      hsl: '15 79.1% 33.7%',
    },
    {
      scale: 900,
      hex: '#7c2d12',
      rgb: '124 45 18',
      hsl: '15.3 74.6% 27.8%',
    },
    {
      scale: 950,
      hex: '#431407',
      rgb: '67 20 7',
      hsl: '13 81.1% 14.5%',
    },
  ],
  amber: [
    {
      scale: 50,
      hex: '#fffbeb',
      rgb: '255 251 235',
      hsl: '48 100% 96.1%',
    },
    {
      scale: 100,
      hex: '#fef3c7',
      rgb: '254 243 199',
      hsl: '48 96.5% 88.8%',
    },
    {
      scale: 200,
      hex: '#fde68a',
      rgb: '253 230 138',
      hsl: '48 96.6% 76.7%',
    },
    {
      scale: 300,
      hex: '#fcd34d',
      rgb: '252 211 77',
      hsl: '45.9 96.7% 64.5%',
    },
    {
      scale: 400,
      hex: '#fbbf24',
      rgb: '251 191 36',
      hsl: '43.3 96.4% 56.3%',
    },
    {
      scale: 500,
      hex: '#f59e0b',
      rgb: '245 158 11',
      hsl: '37.7 92.1% 50.2%',
    },
    {
      scale: 600,
      hex: '#d97706',
      rgb: '217 119 6',
      hsl: '32.1 94.6% 43.7%',
    },
    {
      scale: 700,
      hex: '#b45309',
      rgb: '180 83 9',
      hsl: '26 90.5% 37.1%',
    },
    {
      scale: 800,
      hex: '#92400e',
      rgb: '146 64 14',
      hsl: '22.7 82.5% 31.4%',
    },
    {
      scale: 900,
      hex: '#78350f',
      rgb: '120 53 15',
      hsl: '21.7 77.8% 26.5%',
    },
    {
      scale: 950,
      hex: '#451a03',
      rgb: '69 26 3',
      hsl: '20.9 91.7% 14.1%',
    },
  ],
  yellow: [
    {
      scale: 50,
      hex: '#fefce8',
      rgb: '254 252 232',
      hsl: '54.5 91.7% 95.3%',
    },
    {
      scale: 100,
      hex: '#fef9c3',
      rgb: '254 249 195',
      hsl: '54.9 96.7% 88%',
    },
    {
      scale: 200,
      hex: '#fef08a',
      rgb: '254 240 138',
      hsl: '52.8 98.3% 76.9%',
    },
    {
      scale: 300,
      hex: '#fde047',
      rgb: '253 224 71',
      hsl: '50.4 97.8% 63.5%',
    },
    {
      scale: 400,
      hex: '#facc15',
      rgb: '250 204 21',
      hsl: '47.9 95.8% 53.1%',
    },
    {
      scale: 500,
      hex: '#eab308',
      rgb: '234 179 8',
      hsl: '45.4 93.4% 47.5%',
    },
    {
      scale: 600,
      hex: '#ca8a04',
      rgb: '202 138 4',
      hsl: '40.6 96.1% 40.4%',
    },
    {
      scale: 700,
      hex: '#a16207',
      rgb: '161 98 7',
      hsl: '35.5 91.7% 32.9%',
    },
    {
      scale: 800,
      hex: '#854d0e',
      rgb: '133 77 14',
      hsl: '31.8 81% 28.8%',
    },
    {
      scale: 900,
      hex: '#713f12',
      rgb: '113 63 18',
      hsl: '28.4 72.5% 25.7%',
    },
    {
      scale: 950,
      hex: '#422006',
      rgb: '66 32 6',
      hsl: '26 83.3% 14.1%',
    },
  ],
  lime: [
    {
      scale: 50,
      hex: '#f7fee7',
      rgb: '247 254 231',
      hsl: '78.3 92% 95.1%',
    },
    {
      scale: 100,
      hex: '#ecfccb',
      rgb: '236 252 203',
      hsl: '79.6 89.1% 89.2%',
    },
    {
      scale: 200,
      hex: '#d9f99d',
      rgb: '217 249 157',
      hsl: '80.9 88.5% 79.6%',
    },
    {
      scale: 300,
      hex: '#bef264',
      rgb: '190 242 100',
      hsl: '82 84.5% 67.1%',
    },
    {
      scale: 400,
      hex: '#a3e635',
      rgb: '163 230 53',
      hsl: '82.7 78% 55.5%',
    },
    {
      scale: 500,
      hex: '#84cc16',
      rgb: '132 204 22',
      hsl: '83.7 80.5% 44.3%',
    },
    {
      scale: 600,
      hex: '#65a30d',
      rgb: '101 163 13',
      hsl: '84.8 85.2% 34.5%',
    },
    {
      scale: 700,
      hex: '#4d7c0f',
      rgb: '77 124 15',
      hsl: '85.9 78.4% 27.3%',
    },
    {
      scale: 800,
      hex: '#3f6212',
      rgb: '63 98 18',
      hsl: '86.3 69% 22.7%',
    },
    {
      scale: 900,
      hex: '#365314',
      rgb: '54 83 20',
      hsl: '87.6 61.2% 20.2%',
    },
    {
      scale: 950,
      hex: '#1a2e05',
      rgb: '26 46 5',
      hsl: '89.3 80.4% 10%',
    },
  ],
  green: [
    {
      scale: 50,
      hex: '#f0fdf4',
      rgb: '240 253 244',
      hsl: '138.5 76.5% 96.7%',
    },
    {
      scale: 100,
      hex: '#dcfce7',
      rgb: '220 252 231',
      hsl: '140.6 84.2% 92.5%',
    },
    {
      scale: 200,
      hex: '#bbf7d0',
      rgb: '187 247 208',
      hsl: '141 78.9% 85.1%',
    },
    {
      scale: 300,
      hex: '#86efac',
      rgb: '134 239 172',
      hsl: '141.7 76.6% 73.1%',
    },
    {
      scale: 400,
      hex: '#4ade80',
      rgb: '74 222 128',
      hsl: '141.9 69.2% 58%',
    },
    {
      scale: 500,
      hex: '#22c55e',
      rgb: '34 197 94',
      hsl: '142.1 70.6% 45.3%',
    },
    {
      scale: 600,
      hex: '#16a34a',
      rgb: '22 163 74',
      hsl: '142.1 76.2% 36.3%',
    },
    {
      scale: 700,
      hex: '#15803d',
      rgb: '21 128 61',
      hsl: '142.4 71.8% 29.2%',
    },
    {
      scale: 800,
      hex: '#166534',
      rgb: '22 101 52',
      hsl: '142.8 64.2% 24.1%',
    },
    {
      scale: 900,
      hex: '#14532d',
      rgb: '20 83 45',
      hsl: '143.8 61.2% 20.2%',
    },
    {
      scale: 950,
      hex: '#052e16',
      rgb: '5 46 22',
      hsl: '144.9 80.4% 10%',
    },
  ],
  emerald: [
    {
      scale: 50,
      hex: '#ecfdf5',
      rgb: '236 253 245',
      hsl: '151.8 81% 95.9%',
    },
    {
      scale: 100,
      hex: '#d1fae5',
      rgb: '209 250 229',
      hsl: '149.3 80.4% 90%',
    },
    {
      scale: 200,
      hex: '#a7f3d0',
      rgb: '167 243 208',
      hsl: '152.4 76% 80.4%',
    },
    {
      scale: 300,
      hex: '#6ee7b7',
      rgb: '110 231 183',
      hsl: '156.2 71.6% 66.9%',
    },
    {
      scale: 400,
      hex: '#34d399',
      rgb: '52 211 153',
      hsl: '158.1 64.4% 51.6%',
    },
    {
      scale: 500,
      hex: '#10b981',
      rgb: '16 185 129',
      hsl: '160.1 84.1% 39.4%',
    },
    {
      scale: 600,
      hex: '#059669',
      rgb: '5 150 105',
      hsl: '161.4 93.5% 30.4%',
    },
    {
      scale: 700,
      hex: '#047857',
      rgb: '4 120 87',
      hsl: '162.9 93.5% 24.3%',
    },
    {
      scale: 800,
      hex: '#065f46',
      rgb: '6 95 70',
      hsl: '163.1 88.1% 19.8%',
    },
    {
      scale: 900,
      hex: '#064e3b',
      rgb: '6 78 59',
      hsl: '164.2 85.7% 16.5%',
    },
    {
      scale: 950,
      hex: '#022c22',
      rgb: '2 44 34',
      hsl: '165.7 91.3% 9%',
    },
  ],
  teal: [
    {
      scale: 50,
      hex: '#f0fdfa',
      rgb: '240 253 250',
      hsl: '166.2 76.5% 96.7%',
    },
    {
      scale: 100,
      hex: '#ccfbf1',
      rgb: '204 251 241',
      hsl: '167.2 85.5% 89.2%',
    },
    {
      scale: 200,
      hex: '#99f6e4',
      rgb: '153 246 228',
      hsl: '168.4 83.8% 78.2%',
    },
    {
      scale: 300,
      hex: '#5eead4',
      rgb: '94 234 212',
      hsl: '170.6 76.9% 64.3%',
    },
    {
      scale: 400,
      hex: '#2dd4bf',
      rgb: '45 212 191',
      hsl: '172.5 66% 50.4%',
    },
    {
      scale: 500,
      hex: '#14b8a6',
      rgb: '20 184 166',
      hsl: '173.4 80.4% 40%',
    },
    {
      scale: 600,
      hex: '#0d9488',
      rgb: '13 148 136',
      hsl: '174.7 83.9% 31.6%',
    },
    {
      scale: 700,
      hex: '#0f766e',
      rgb: '15 118 110',
      hsl: '175.3 77.4% 26.1%',
    },
    {
      scale: 800,
      hex: '#115e59',
      rgb: '17 94 89',
      hsl: '176.1 69.4% 21.8%',
    },
    {
      scale: 900,
      hex: '#134e4a',
      rgb: '19 78 74',
      hsl: '175.9 60.8% 19%',
    },
    {
      scale: 950,
      hex: '#042f2e',
      rgb: '4 47 46',
      hsl: '178.6 84.3% 10%',
    },
  ],
  cyan: [
    {
      scale: 50,
      hex: '#ecfeff',
      rgb: '236 254 255',
      hsl: '183.2 100% 96.3%',
    },
    {
      scale: 100,
      hex: '#cffafe',
      rgb: '207 250 254',
      hsl: '185.1 95.9% 90.4%',
    },
    {
      scale: 200,
      hex: '#a5f3fc',
      rgb: '165 243 252',
      hsl: '186.2 93.5% 81.8%',
    },
    {
      scale: 300,
      hex: '#67e8f9',
      rgb: '103 232 249',
      hsl: '187 92.4% 69%',
    },
    {
      scale: 400,
      hex: '#22d3ee',
      rgb: '34 211 238',
      hsl: '187.9 85.7% 53.3%',
    },
    {
      scale: 500,
      hex: '#06b6d4',
      rgb: '6 182 212',
      hsl: '188.7 94.5% 42.7%',
    },
    {
      scale: 600,
      hex: '#0891b2',
      rgb: '8 145 178',
      hsl: '191.6 91.4% 36.5%',
    },
    {
      scale: 700,
      hex: '#0e7490',
      rgb: '14 116 144',
      hsl: '192.9 82.3% 31%',
    },
    {
      scale: 800,
      hex: '#155e75',
      rgb: '21 94 117',
      hsl: '194.4 69.6% 27.1%',
    },
    {
      scale: 900,
      hex: '#164e63',
      rgb: '22 78 99',
      hsl: '196.4 63.6% 23.7%',
    },
    {
      scale: 950,
      hex: '#083344',
      rgb: '8 51 68',
      hsl: '197 78.9% 14.9%',
    },
  ],
  sky: [
    {
      scale: 50,
      hex: '#f0f9ff',
      rgb: '240 249 255',
      hsl: '204 100% 97.1%',
    },
    {
      scale: 100,
      hex: '#e0f2fe',
      rgb: '224 242 254',
      hsl: '204 93.8% 93.7%',
    },
    {
      scale: 200,
      hex: '#bae6fd',
      rgb: '186 230 253',
      hsl: '200.6 94.4% 86.1%',
    },
    {
      scale: 300,
      hex: '#7dd3fc',
      rgb: '125 211 252',
      hsl: '199.4 95.5% 73.9%',
    },
    {
      scale: 400,
      hex: '#38bdf8',
      rgb: '56 189 248',
      hsl: '198.4 93.2% 59.6%',
    },
    {
      scale: 500,
      hex: '#0ea5e9',
      rgb: '14 165 233',
      hsl: '198.6 88.7% 48.4%',
    },
    {
      scale: 600,
      hex: '#0284c7',
      rgb: '2 132 199',
      hsl: '200.4 98% 39.4%',
    },
    {
      scale: 700,
      hex: '#0369a1',
      rgb: '3 105 161',
      hsl: '201.3 96.3% 32.2%',
    },
    {
      scale: 800,
      hex: '#075985',
      rgb: '7 89 133',
      hsl: '201 90% 27.5%',
    },
    {
      scale: 900,
      hex: '#0c4a6e',
      rgb: '12 74 110',
      hsl: '202 80.3% 23.9%',
    },
    {
      scale: 950,
      hex: '#082f49',
      rgb: '8 47 73',
      hsl: '204 80.2% 15.9%',
    },
  ],
  blue: [
    {
      scale: 50,
      hex: '#eff6ff',
      rgb: '239 246 255',
      hsl: '213.8 100% 96.9%',
    },
    {
      scale: 100,
      hex: '#dbeafe',
      rgb: '219 234 254',
      hsl: '214.3 94.6% 92.7%',
    },
    {
      scale: 200,
      hex: '#bfdbfe',
      rgb: '191 219 254',
      hsl: '213.3 96.9% 87.3%',
    },
    {
      scale: 300,
      hex: '#93c5fd',
      rgb: '147 197 253',
      hsl: '211.7 96.4% 78.4%',
    },
    {
      scale: 400,
      hex: '#60a5fa',
      rgb: '96 165 250',
      hsl: '213.1 93.9% 67.8%',
    },
    {
      scale: 500,
      hex: '#3b82f6',
      rgb: '59 130 246',
      hsl: '217.2 91.2% 59.8%',
    },
    {
      scale: 600,
      hex: '#2563eb',
      rgb: '37 99 235',
      hsl: '221.2 83.2% 53.3%',
    },
    {
      scale: 700,
      hex: '#1d4ed8',
      rgb: '29 78 216',
      hsl: '224.3 76.3% 48%',
    },
    {
      scale: 800,
      hex: '#1e40af',
      rgb: '30 64 175',
      hsl: '225.9 70.7% 40.2%',
    },
    {
      scale: 900,
      hex: '#1e3a8a',
      rgb: '30 58 138',
      hsl: '224.4 64.3% 32.9%',
    },
    {
      scale: 950,
      hex: '#172554',
      rgb: '23 37 84',
      hsl: '226.2 57% 21%',
    },
  ],
  indigo: [
    {
      scale: 50,
      hex: '#eef2ff',
      rgb: '238 242 255',
      hsl: '225.9 100% 96.7%',
    },
    {
      scale: 100,
      hex: '#e0e7ff',
      rgb: '224 231 255',
      hsl: '226.5 100% 93.9%',
    },
    {
      scale: 200,
      hex: '#c7d2fe',
      rgb: '199 210 254',
      hsl: '228 96.5% 88.8%',
    },
    {
      scale: 300,
      hex: '#a5b4fc',
      rgb: '165 180 252',
      hsl: '229.7 93.5% 81.8%',
    },
    {
      scale: 400,
      hex: '#818cf8',
      rgb: '129 140 248',
      hsl: '234.5 89.5% 73.9%',
    },
    {
      scale: 500,
      hex: '#6366f1',
      rgb: '99 102 241',
      hsl: '238.7 83.5% 66.7%',
    },
    {
      scale: 600,
      hex: '#4f46e5',
      rgb: '79 70 229',
      hsl: '243.4 75.4% 58.6%',
    },
    {
      scale: 700,
      hex: '#4338ca',
      rgb: '67 56 202',
      hsl: '244.5 57.9% 50.6%',
    },
    {
      scale: 800,
      hex: '#3730a3',
      rgb: '55 48 163',
      hsl: '243.7 54.5% 41.4%',
    },
    {
      scale: 900,
      hex: '#312e81',
      rgb: '49 46 129',
      hsl: '242.2 47.4% 34.3%',
    },
    {
      scale: 950,
      hex: '#1e1b4b',
      rgb: '30 27 75',
      hsl: '243.8 47.1% 20%',
    },
  ],
  violet: [
    {
      scale: 50,
      hex: '#f5f3ff',
      rgb: '245 243 255',
      hsl: '250 100% 97.6%',
    },
    {
      scale: 100,
      hex: '#ede9fe',
      rgb: '237 233 254',
      hsl: '251.4 91.3% 95.5%',
    },
    {
      scale: 200,
      hex: '#ddd6fe',
      rgb: '221 214 254',
      hsl: '250.5 95.2% 91.8%',
    },
    {
      scale: 300,
      hex: '#c4b5fd',
      rgb: '196 181 253',
      hsl: '252.5 94.7% 85.1%',
    },
    {
      scale: 400,
      hex: '#a78bfa',
      rgb: '167 139 250',
      hsl: '255.1 91.7% 76.3%',
    },
    {
      scale: 500,
      hex: '#8b5cf6',
      rgb: '139 92 246',
      hsl: '258.3 89.5% 66.3%',
    },
    {
      scale: 600,
      hex: '#7c3aed',
      rgb: '124 58 237',
      hsl: '262.1 83.3% 57.8%',
    },
    {
      scale: 700,
      hex: '#6d28d9',
      rgb: '109 40 217',
      hsl: '263.4 70% 50.4%',
    },
    {
      scale: 800,
      hex: '#5b21b6',
      rgb: '91 33 182',
      hsl: '263.4 69.3% 42.2%',
    },
    {
      scale: 900,
      hex: '#4c1d95',
      rgb: '76 29 149',
      hsl: '263.5 67.4% 34.9%',
    },
    {
      scale: 950,
      hex: '#1e1b4b',
      rgb: '46 16 101',
      hsl: '261.2 72.6% 22.9%',
    },
  ],
  purple: [
    {
      scale: 50,
      hex: '#faf5ff',
      rgb: '250 245 255',
      hsl: '270 100% 98%',
    },
    {
      scale: 100,
      hex: '#f3e8ff',
      rgb: '243 232 255',
      hsl: '268.7 100% 95.5%',
    },
    {
      scale: 200,
      hex: '#e9d5ff',
      rgb: '233 213 255',
      hsl: '268.6 100% 91.8%',
    },
    {
      scale: 300,
      hex: '#d8b4fe',
      rgb: '216 180 254',
      hsl: '269.2 97.4% 85.1%',
    },
    {
      scale: 400,
      hex: '#c084fc',
      rgb: '192 132 252',
      hsl: '270 95.2% 75.3%',
    },
    {
      scale: 500,
      hex: '#a855f7',
      rgb: '168 85 247',
      hsl: '270.7 91% 65.1%',
    },
    {
      scale: 600,
      hex: '#9333ea',
      rgb: '147 51 234',
      hsl: '271.5 81.3% 55.9%',
    },
    {
      scale: 700,
      hex: '#7e22ce',
      rgb: '126 34 206',
      hsl: '272.1 71.7% 47.1%',
    },
    {
      scale: 800,
      hex: '#6b21a8',
      rgb: '107 33 168',
      hsl: '272.9 67.2% 39.4%',
    },
    {
      scale: 900,
      hex: '#581c87',
      rgb: '88 28 135',
      hsl: '273.6 65.6% 32%',
    },
    {
      scale: 950,
      hex: '#3b0764',
      rgb: '59 7 100',
      hsl: '273.5 86.9% 21%',
    },
  ],
  fuchsia: [
    {
      scale: 50,
      hex: '#fdf4ff',
      rgb: '253 244 255',
      hsl: '289.1 100% 97.8%',
    },
    {
      scale: 100,
      hex: '#fae8ff',
      rgb: '250 232 255',
      hsl: '287 100% 95.5%',
    },
    {
      scale: 200,
      hex: '#f5d0fe',
      rgb: '245 208 254',
      hsl: '288.3 95.8% 90.6%',
    },
    {
      scale: 300,
      hex: '#f0abfc',
      rgb: '240 171 252',
      hsl: '291.1 93.1% 82.9%',
    },
    {
      scale: 400,
      hex: '#e879f9',
      rgb: '232 121 249',
      hsl: '292 91.4% 72.5%',
    },
    {
      scale: 500,
      hex: '#d946ef',
      rgb: '217 70 239',
      hsl: '292.2 84.1% 60.6%',
    },
    {
      scale: 600,
      hex: '#c026d3',
      rgb: '192 38 211',
      hsl: '293.4 69.5% 48.8%',
    },
    {
      scale: 700,
      hex: '#a21caf',
      rgb: '162 28 175',
      hsl: '294.7 72.4% 39.8%',
    },
    {
      scale: 800,
      hex: '#86198f',
      rgb: '134 25 143',
      hsl: '295.4 70.2% 32.9%',
    },
    {
      scale: 900,
      hex: '#701a75',
      rgb: '112 26 117',
      hsl: '296.7 63.6% 28%',
    },
    {
      scale: 950,
      hex: '#4a044e',
      rgb: '74 4 78',
      hsl: '296.8 90.2% 16.1%',
    },
  ],
  pink: [
    {
      scale: 50,
      hex: '#fdf2f8',
      rgb: '253 242 248',
      hsl: '327.3 73.3% 97.1%',
    },
    {
      scale: 100,
      hex: '#fce7f3',
      rgb: '252 231 243',
      hsl: '325.7 77.8% 94.7%',
    },
    {
      scale: 200,
      hex: '#fbcfe8',
      rgb: '251 207 232',
      hsl: '325.9 84.6% 89.8%',
    },
    {
      scale: 300,
      hex: '#f9a8d4',
      rgb: '249 168 212',
      hsl: '327.4 87.1% 81.8%',
    },
    {
      scale: 400,
      hex: '#f472b6',
      rgb: '244 114 182',
      hsl: '328.6 85.5% 70.2%',
    },
    {
      scale: 500,
      hex: '#ec4899',
      rgb: '236 72 153',
      hsl: '330.4 81.2% 60.4%',
    },
    {
      scale: 600,
      hex: '#db2777',
      rgb: '219 39 119',
      hsl: '333.3 71.4% 50.6%',
    },
    {
      scale: 700,
      hex: '#be185d',
      rgb: '190 24 93',
      hsl: '335.1 77.6% 42%',
    },
    {
      scale: 800,
      hex: '#9d174d',
      rgb: '157 23 77',
      hsl: '335.8 74.4% 35.3%',
    },
    {
      scale: 900,
      hex: '#831843',
      rgb: '131 24 67',
      hsl: '335.9 69% 30.4%',
    },
    {
      scale: 950,
      hex: '#500724',
      rgb: '80 7 36',
      hsl: '336.2 83.9% 17.1%',
    },
  ],
  rose: [
    {
      scale: 50,
      hex: '#fff1f2',
      rgb: '255 241 242',
      hsl: '355.7 100% 97.3%',
    },
    {
      scale: 100,
      hex: '#ffe4e6',
      rgb: '255 228 230',
      hsl: '355.6 100% 94.7%',
    },
    {
      scale: 200,
      hex: '#fecdd3',
      rgb: '254 205 211',
      hsl: '352.7 96.1% 90%',
    },
    {
      scale: 300,
      hex: '#fda4af',
      rgb: '253 164 175',
      hsl: '352.6 95.7% 81.8%',
    },
    {
      scale: 400,
      hex: '#fb7185',
      rgb: '251 113 133',
      hsl: '351.3 94.5% 71.4%',
    },
    {
      scale: 500,
      hex: '#f43f5e',
      rgb: '244 63 94',
      hsl: '349.7 89.2% 60.2%',
    },
    {
      scale: 600,
      hex: '#e11d48',
      rgb: '225 29 72',
      hsl: '346.8 77.2% 49.8%',
    },
    {
      scale: 700,
      hex: '#be123c',
      rgb: '190 18 60',
      hsl: '345.3 82.7% 40.8%',
    },
    {
      scale: 800,
      hex: '#9f1239',
      rgb: '159 18 57',
      hsl: '343.4 79.7% 34.7%',
    },
    {
      scale: 900,
      hex: '#881337',
      rgb: '136 19 55',
      hsl: '341.5 75.5% 30.4%',
    },
    {
      scale: 950,
      hex: '#4c0519',
      rgb: '76 5 25',
      hsl: '343.1 87.7% 15.9%',
    },
  ],
};

export const colorMapping = {
  light: {
    background: 'white',
    foreground: '{{base}}-950',
    card: 'white',
    'card-foreground': '{{base}}-950',
    popover: 'white',
    'popover-foreground': '{{base}}-950',
    primary: '{{base}}-900',
    'primary-foreground': '{{base}}-50',
    secondary: '{{base}}-100',
    'secondary-foreground': '{{base}}-900',
    muted: '{{base}}-100',
    'muted-foreground': '{{base}}-500',
    accent: '{{base}}-100',
    'accent-foreground': '{{base}}-900',
    destructive: 'red-500',
    'destructive-foreground': '{{base}}-50',
    border: '{{base}}-200',
    input: '{{base}}-200',
    ring: '{{base}}-950',
  },
  dark: {
    background: '{{base}}-950',
    foreground: '{{base}}-50',
    card: '{{base}}-950',
    'card-foreground': '{{base}}-50',
    popover: '{{base}}-950',
    'popover-foreground': '{{base}}-50',
    primary: '{{base}}-50',
    'primary-foreground': '{{base}}-900',
    secondary: '{{base}}-800',
    'secondary-foreground': '{{base}}-50',
    muted: '{{base}}-800',
    'muted-foreground': '{{base}}-400',
    accent: '{{base}}-800',
    'accent-foreground': '{{base}}-50',
    destructive: 'red-900',
    'destructive-foreground': '{{base}}-50',
    border: '{{base}}-800',
    input: '{{base}}-800',
    ring: '{{base}}-300',
  },
} as const;
