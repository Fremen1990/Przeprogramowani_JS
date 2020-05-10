  } else if (
    !(
      password.includes("!") ||
      password.includes("@") ||
      password.includes("#")
    )
  ) {
    return false;
  } else if (!/\d/g.test(password)) {
    return false;