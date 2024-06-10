window.onload = function () {
	// Получить IP и страну
	fetch('https://ipapi.co/json/')
		.then(response => response.json())
		.then(data => {
			document.getElementById('ip').textContent = `IP-адрес: ${data.ip}`
			document.getElementById(
				'country'
			).textContent = `Страна: ${data.country_name}`
		})

	// Получить текущее время
	let currentTime = new Date()
	document.getElementById('time').textContent = `Текущее время: ${currentTime}`

	// Получить операционную систему
	let os = getOS()
	document.getElementById('os').textContent = `Операционная система: ${os}`

	// Получить браузер
	let browser = getBrowser()
	document.getElementById('browser').textContent = `Браузер: ${browser}`

	// Получить язык браузера
	let language = navigator.language || navigator.userLanguage
	document.getElementById('language').textContent = `Язык: ${language}`

	// Получить разрешение экрана
	let screenResolution = `${window.screen.width}x${window.screen.height}`
	document.getElementById(
		'screenResolution'
	).textContent = `Разрешение экрана: ${screenResolution}`

	// Получить user agent
	let userAgent = navigator.userAgent
	document.getElementById('userAgent').textContent = `User Agent: ${userAgent}`

	// Получить количество логических ядер процессора
	let cpuCores = navigator.hardwareConcurrency
	document.getElementById(
		'cpuCores'
	).textContent = `Количество ядер процессора: ${cpuCores}`

	// Получить информацию о памяти
	if (performance.memory) {
		let memory = performance.memory
		document.getElementById('memory').textContent = `Используемая память: ${(
			memory.usedJSHeapSize / 1048576
		).toFixed(2)} MB из ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`
	} else {
		document.getElementById('memory').textContent =
			'Информация о памяти недоступна'
	}
}

function getOS() {
	let userAgent = window.navigator.userAgent
	let platform = window.navigator.platform
	let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
	let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
	let iosPlatforms = ['iPhone', 'iPad', 'iPod']
	let os = null

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS'
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS'
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows'
	} else if (/Android/.test(userAgent)) {
		os = 'Android'
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux'
	}

	return os
}

function getBrowser() {
	let userAgent = navigator.userAgent
	let browserName

	if (userAgent.indexOf('Chrome') > -1) {
		browserName = 'Chrome'
	} else if (userAgent.indexOf('Safari') > -1) {
		browserName = 'Safari'
	} else if (userAgent.indexOf('Firefox') > -1) {
		browserName = 'Firefox'
	} else if (
		userAgent.indexOf('MSIE') > -1 ||
		!!document.documentMode === true
	) {
		// IE
		browserName = 'IE'
	} else {
		browserName = 'Unknown'
	}

	return browserName
}
