/*
 * Copyright 2022 Nefo Fortressia and contributors. All Rights Reserved
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */


import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  content: [
    "./index.html",
    "./{renderer,pages}/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundColor: {
        dark: '#242424',
        light: '#fafafa'
      },
      colors: {
        'blue': {
          100: '#99c1f1',
          200: '#62a0ea',
          300: '#3584e4',
          400: '#1c71d8',

        }

      },
    },
  },
  plugins: [],
})