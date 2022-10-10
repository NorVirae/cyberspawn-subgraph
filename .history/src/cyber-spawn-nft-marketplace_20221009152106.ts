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

export function handleOfferCancelled(event: OfferCancelled): void {
}

export function handleOfferCreated(event: OfferCreated): void {
  const newNotification = new Notification(event.transaction.hash.toHex())
  newNotification.from = event.params.owner.toString()
  newNotification.message = "You started a Sale"
  newNotification.date = event.block.timestamp.toString()
  newNotification.save()

  
  
  const newUser =  User.load(event.params.owner.toHex())
   

  if(newUser == null){
    const user = new User(event.params.owner.toHex())
    user.createdAt = event.block.timestamp.toString()
    user.save()
  }
  

}

export function handleOfferPurchased(event: OfferPurchased): void {
  
  const newNotification = new Notification(event.block.timestamp.toHex())
  newNotification.from = event.params.buyer.toString()
  newNotification.message = "You Made a Purchase"
  newNotification.date = event.block.timestamp.toString()
  newNotification.save()

  
}

export function handlePauseToggled(event: PauseToggled): void {
}

export function handleUpdateAccessControls(event: UpdateAccessControls): void {
}

export function handleUpdateDiscountRate(event: UpdateDiscountRate): void {
}

export function handleUpdateMarketplacePlatformFee(
  event: UpdateMarketplacePlatformFee
): void {
}

export function handleUpdateOfferSalePrice(event: UpdateOfferSalePrice): void {
}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {
}
