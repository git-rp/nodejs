const caculateTip = (total, tipPercent = 1.2) => {
  const tip = total * tipPercent;
  console.log(tip);
  return tip;
};

module.exports = {
  caculateTip,
};
