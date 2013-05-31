

/*
Adlibris Translator
Copyright (C) 2013 Isak Bergdahl

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

function detectWeb(doc, url) { return FW.detectWeb(doc, url); }
function doWeb(doc, url) { return FW.doWeb(doc, url); }

// Delvis anpassad till nya Adlibris. Invänta fler ändringar.

/** Books */
FW.Scraper({
itemType		: 'book',
detect			: FW.Url().match(/Product/),
url				: FW.Url(),
creators			: FW.Xpath('//div[@class="bd"]/h2').text().cleanAuthor('author'),
title			: FW.Xpath('//div[@class="bd"]/h1').text(),
edition			: FW.Xpath('//span[@id="ctl00_main_frame_ctrlproduct_lblEdition"]').text(),
ISBN			: FW.Xpath('//span[@itemprop="isbn"]').text(),
publisher		: FW.Xpath('//span[@itemprop="publisher"]').text(),
series			: FW.Xpath('//li[@id="ctl00_main_frame_ctrlproduct_liSeries"]/a').text(),
numPages		: FW.Xpath('//span[@id="ctl00_main_frame_ctrlproduct_lblPages"]').text(),
date			: FW.Xpath('//span[@id="ctl00_main_frame_ctrlproduct_lblPublished"]').text()
});