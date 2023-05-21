const getMonthDiff = purchaseDate => {
    const currDate = new Date()
    const purchDate = new Date(purchaseDate)
    const mnthDiff = currDate.getMonth() - purchDate.getMonth()
    const yearDiff = currDate.getYear() - purchDate.getYear()

    return mnthDiff + yearDiff * 12
}

  export default getMonthDiff