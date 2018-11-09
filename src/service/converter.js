/*
 * This color converter software is part of a micro-service architecture written for demonstration purposes.
 * Copyright (C)  2017  Gianni Bombelli @ Intré S.r.l.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import convert from 'color-convert'

export function hsl2hex (hsl) {
  // TODO Esercizio 2B: nuova branch da master (stesso di 2A)
  // implementare il converter poi commit e push
  // fare merge da GitLab-CE

  const { hue, saturation, lightness } = hsl
  return { 'hex': convert.hsl.hex(hue, saturation, lightness).toLowerCase() }
}

export function hex2hsl (hex) {
  // TODO Esercizio 3B: nuova branch da master
  // implementare converter e test
  // fare merge da GitLab-CE

  // const hsl = convert.hex.hsl(hex.hex)
  // return { 'hue': hsl[0], 'saturation': hsl[1], 'lightness': hsl[2] }

  // TODO Esercizio 5A: nuova branch da master
  // fare cherry-pick (o similari) per riportare i valori di test in errore
  // gestire il caso limite e "rendere verdi" i test
  // nessun merge su master!!!
}
