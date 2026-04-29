const ceil100 = (value) => Math.ceil(value / 100) * 100;
const roundFu = (fu) => Math.ceil(fu / 10) * 10;

export function calcHan({ selectedYaku, yakuList, isClosed, doraCount = 0, uraDoraCount = 0, akaDoraCount = 0 }) {
  const yakuHan = selectedYaku.reduce((sum, item) => {
    const yaku = yakuList.find((y) => y.id === item.id);
    if (!yaku) return sum;
    const han = isClosed ? yaku.closedHan : yaku.openHan;
    return sum + Math.max(0, han) * (item.count || 1);
  }, 0);

  return yakuHan + Number(doraCount || 0) + Number(uraDoraCount || 0) + Number(akaDoraCount || 0);
}

export function getLimitBasePoint(han, fu) {
  if (han >= 13) return { base: 8000, label: '역만' };
  if (han >= 11) return { base: 6000, label: '삼배만' };
  if (han >= 8) return { base: 4000, label: '배만' };
  if (han >= 6) return { base: 3000, label: '하네만' };
  if (han >= 5) return { base: 2000, label: '만관' };

  const normalizedFu = roundFu(fu);
  const base = normalizedFu * Math.pow(2, han + 2);
  if (base >= 2000) return { base: 2000, label: '만관' };
  return { base, label: null };
}

export function calcScore({ han, fu, winType, playerType, honba = 0 }) {
  if (!han || han < 1) {
    return { error: '역이 1판 이상 필요합니다.' };
  }

  const normalizedFu = roundFu(Number(fu) || 20);
  const { base, label } = getLimitBasePoint(han, normalizedFu);
  const honbaBonus = Number(honba || 0) * 300;

  if (winType === 'ron') {
    const multiplier = playerType === 'dealer' ? 6 : 4;
    const points = ceil100(base * multiplier) + honbaBonus;
    return { total: points, payments: [{ label: '방총자 지불', points }], limit: label, fu: normalizedFu };
  }

  if (playerType === 'dealer') {
    const each = ceil100(base * 2) + Number(honba || 0) * 100;
    return {
      total: each * 3,
      payments: [{ label: '각자 지불', points: each }],
      limit: label,
      fu: normalizedFu,
    };
  }

  const fromDealer = ceil100(base * 2) + Number(honba || 0) * 100;
  const fromNonDealer = ceil100(base) + Number(honba || 0) * 100;
  return {
    total: fromDealer + fromNonDealer * 2,
    payments: [
      { label: '친 지불', points: fromDealer },
      { label: '자 지불', points: fromNonDealer },
    ],
    limit: label,
    fu: normalizedFu,
  };
}
