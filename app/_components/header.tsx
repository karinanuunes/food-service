"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  CupSoda,
  Fish,
  HeartIcon,
  HomeIcon,
  IceCream,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  Pizza,
  Sandwich,
  ScrollTextIcon,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import {
  AlertDialogAction,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const Header = () => {
  const { data } = useSession();
  const hangleSignInClick = () => signIn();
  const hangleSignOutClick = () => signOut();

  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href="/">
        <div className="relative h-[40px] w-[65px]">
          <Image
            src="/Logo.png"
            alt="FSW Foods"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          {data?.user ? (
            <>
              <div className="flex justify-between pt-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image as string | undefined}
                      className="h-10 w-10 rounded-full border-2 border-red-600 object-cover"
                    />
                    <AvatarFallback>
                      {data?.user?.name?.split(" ")[0][0]}
                      {data?.user?.name?.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{data?.user?.name}</h3>
                    <span className="block text-xs text-muted-foreground">
                      {data?.user?.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <Separator />
              </div>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full bg-red-600 text-sm font-normal text-white"
                  asChild
                >
                  <Link href="/">
                    <HomeIcon size={18} />
                    <span className="block">Início</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/my-orders">
                    <ScrollTextIcon size={18} />
                    <span className="block">Meus Pedidos</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/my-favorite-restaurants">
                    <HeartIcon size={18} />
                    <span className="block">Restaurantes Favoritos</span>
                  </Link>
                </Button>
              </div>
              <div className="py-6">
                <Separator />
              </div>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/fa2842fb-3dd8-4a02-b3b5-cf70a2bcda0d/products">
                    <Utensils size={16} />
                    <span className="block">Pratos</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/6fece720-97d3-4206-ad6c-1c136de82bf0/products">
                    <Sandwich size={16} />
                    <span className="block">Lanches</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/c1876eb4-941b-4182-8085-1b4831c668c6/products">
                    <Pizza size={16} />
                    <span className="block">Pizza</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/7a608200-fdc6-4443-adce-d495ab4ae63e/products">
                    <Fish size={16} />
                    <span className="block">Japonesa</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/46c33e18-0361-48b7-bcf2-6f8e629d293f/products">
                    <IceCream size={16} />
                    <span className="block">Sobremesas</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  asChild
                >
                  <Link href="/categories/25ba82ce-48c1-43d6-a014-17e7b0ee5c00/products">
                    <CupSoda size={16} />
                    <span className="block">Sucos</span>
                  </Link>
                </Button>
              </div>
              <div className="py-6">
                <Separator />
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                  >
                    <LogOutIcon size={18} />
                    <span className="block">Sair da conta</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Sair da conta</AlertDialogTitle>
                    <AlertDialogDescription>
                      Deseja mesmo sair da plataforma?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={hangleSignOutClick}>
                      Sair
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between pt-10">
                <h2 className="font-semibold">Olá. Faça seu login</h2>
                <Button size="icon" onClick={hangleSignInClick}>
                  <LogInIcon />
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
