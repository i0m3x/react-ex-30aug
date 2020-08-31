var charge = (   product.isShippable()
               ? flatRateShippingCharge +(   product.isOversized()? oversizedShippingSurcharge: 0 ) // No surcharge for most products!
               : 0 ); // Digital product — no shipping!


               //the only relationship is...https://www.tcg.com/blog/the-beautiful-ternary/