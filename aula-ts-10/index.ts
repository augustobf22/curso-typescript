function identity<Tipo> (value: Tipo): Tipo {
    return value;
}

console.log(identity<string>("10")) // 1