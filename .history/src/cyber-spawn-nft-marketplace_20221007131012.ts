import { BigInt } from "@graphprotocol/graph-ts"
import {
  CyberSpawnNFTMarketplace,
  NFTMarketplaceContractDeployed,
  OfferCancelled,
  OfferCreated,
  OfferPurchased,
  PauseToggled,
  UpdateAccessControls,
  UpdateDiscountRate,
  UpdateMarketplacePlatformFee,
  UpdateOfferSalePrice,
  UpdatePlatformFeeRecipient
} from "../generated/CyberSpawnNFTMarketplace/CyberSpawnNFTMarketplace"
import { User, Notification } from "../generated/schema"

export function handleOfferCancelled(event: OfferCancelled): void {}

export function handleOfferCreated(event: OfferCreated): void {
  const newUser = new User(event.params.owner.toString())
  newUser.createdAt = event.block.timestamp.toU32()
  newUser.save()

}

export function handleOfferPurchased(event: OfferPurchased): void {}

export function handlePauseToggled(event: PauseToggled): void {}

export function handleUpdateAccessControls(event: UpdateAccessControls): void {}

export function handleUpdateDiscountRate(event: UpdateDiscountRate): void {}

export function handleUpdateMarketplacePlatformFee(
  event: UpdateMarketplacePlatformFee
): void {}

export function handleUpdateOfferSalePrice(event: UpdateOfferSalePrice): void {}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {}