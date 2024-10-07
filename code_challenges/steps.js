const steps = n => {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n))
  }
}

steps(5)