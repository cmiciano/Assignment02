// The Word Translator

// Usage: Use simple conditional statements

//Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
//If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
//If the user enters anything but those four language codes, the application should default to English. T
//The result should be (for example):
// Hello World translated in French is: Bonjour le monde

let langCode = prompt("Enter a language code")


if (langCode == 'es') {
    console.log('Hello world translated in Spanish is: Hola mundo')
}
else if (langCode == 'de') {
    console.log('Hello world translated in German is: Hallo Welt')


} else if (langCode == 'en') {
    console.log('Hello world translated in English is: Hello World')


} else if (langCode == 'fr' ){
    console.log('Hello world translated in French is: Bonjour le monde')


} else {
    console.log('Hello world translated in English is: Hello World')

}