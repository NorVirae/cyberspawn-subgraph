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
  const newNotification = new Notification(event.block.timestamp.toHex())
  newNotification.from = event.params.owner.toHexString()
  newNotification.message = "You started a Sale"
  newNotification.date = event.block.timestamp..toString()()
  newNotification.save()

  
  
  const newUser =  User.load(event.params.owner.toString())
   

  if(newUser == null){
    const user = new User(event.params.owner.toString())
    user.createdAt = event.block.timestamp.toU64()
    user.save()
  }
  

}

export function handleOfferPurchased(event: OfferPurchased): void {
  const newNotification = new Notification(event.block.timestamp.toHex())
  newNotification.from = event.params.buyer.toHexString()
  newNotification.message = "You started a Sale"
  newNotification.date = event.block.timestamp.toU64()
  newNotification.save()

  
  
  const newUser =  User.load(event.params.buyer.toString())
   

  if(!newUser){
    const user = new User(event.params.buyer.toString())
    user.createdAt = event.block.timestamp.toU64()
    user.save()
  }
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
