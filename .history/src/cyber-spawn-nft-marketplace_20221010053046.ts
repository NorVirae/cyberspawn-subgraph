import { BigInt, json } from "@graphprotocol/graph-ts"
import { log, } from '@graphprotocol/graph-ts'
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
  newNotification.from = event.params.owner.toHexString()
  newNotification.message = "You started a Sale"
  newNotification.date = event.block.timestamp.toString()
  newNotification.save()
  log.info(json,[])

  const oldUser =  User.load(event.params.owner.toHex())
   

  if(!oldUser){
    const newUser = new User(event.params.owner.toHex())

    newUser.createdAt = event.block.timestamp.toString()
    newUser.save()
    return
  }

  oldUser.notifications.push(newNotification.id)
  oldUser.save()
}

export function handleOfferPurchased(event: OfferPurchased): void {
  
  const newNotification = new Notification(event.block.timestamp.toHex())
  newNotification.from = event.params.buyer.toHexString()
  newNotification.message = "You Made a Purchase"
  newNotification.date = event.block.timestamp.toString()
  newNotification.save()
  const oldUser =  User.load(event.params.buyer.toHex())
   

  if(!oldUser){
    const newUser = new User(event.params.buyer.toHex())
    newUser.createdAt = event.block.timestamp.toString()
    newUser.save()
    return
  }
  
  oldUser.notifications.push(newNotification.id)
  oldUser.save()

  
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
