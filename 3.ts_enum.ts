enum Scoures{
    php= "PHP",
    laravel = "Laravel",
    react = "react"
}

function skill(name: string, title: Scoures): void{
    console.log(name, title)
}

skill("Hello", Scoures.react)