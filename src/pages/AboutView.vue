<template>
    <h1 class="text-ewhite text-center phone:text-base desktop:text-lg font-audiowide text-shadow-epurple">About us</h1>
    <p class="font-trap-regular text-ewhite mx-10 mt-2 mb-10">We are a young team passionate about digital technology who has decided, as a part of a semester project set up by the MMI department of Montbéliard in France. to build a website allowing to create a customizable NFT. Once the nft is generated, 8% of all resales will be returned to the original 4 parties Here will be the presentation of the partner association when is chosen.</p>

    <div>
        <carouselDesk class="desktop:flex hidden"/>
        <carouselPhone class="desktop:hidden flex"/>
    </div>

    <h1 class="text-ewhite text-center phone:text-base desktop:text-lg font-audiowide text-shadow-epurple mt-40">Software used to design this project</h1>

    <section class="grid desktop:grid-cols-2 phone:grid-cols-1 mx-10 relative mt-8">
        <div class="col-span-1">
            <h2 class="text-ewhite text-center phone:text-xs desktop:text-base  font-audiowide text-shadow-epink mb-4">Adobe substance 3D</h2>
            <p class="text-ewhite phone:text-3xs desktop:text-xs font-trap-regular text-shadow-epurple">This suite allowed us to create unique and different textures for each model or accessories. <br /><br />
            Each object is then stagedto bring a touch of reality to the creation</p>
        </div>

        <div class="desktop:-mt-16 flex justify-center col-span-1">
            <img src="/public/img/suite-adobe-3d.png" alt="" class="desktop:h-[500px] desktop:flex hidden">
            <img src="/public/img/suite-adobe-3d_phone.png" alt="" class="desktop:hidden flex">
        </div>
    </section>

    <section class="grid desktop:grid-cols-2 phone:grid-cols-1 mx-10 relative mt-8">

        <div class="desktop:-mt-16 justify-center col-span-1 desktop:flex hidden">
            <img src="/public/img/suite-adobe-2.png" alt="" class="desktop:h-[500px]">
        </div>

        <div class="col-span-1">
            <h2 class="text-ewhite text-center phone:text-xs desktop:text-base  font-audiowide text-shadow-epink mb-4">Adobe Photoshop, illustrator and Blender</h2>
            <p class="text-ewhite phone:text-3xs desktop:text-xs font-trap-regular text-shadow-epurple">With these programs we first create the logo with illustrator and with Photoshop all the secondary elements of our creation such as background, effects with temperatures etc... <br/> <br/>
            For Blender it was used mainly for animation that explains how our NFT is creating</p>
        </div>

        <img src="/public/img/suite-adobe-2_phone.png" alt="" class="desktop:hidden flex col-span-1">
    </section>

    <section class="grid desktop:grid-cols-2 phone:grid-cols-1 mx-10 relative mt-8">
        <div class="col-span-1">
            <h2 class="text-ewhite text-center phone:text-xs desktop:text-base  font-audiowide text-shadow-epink mb-4">Visual Studio Code and the language Ligo</h2>
            <p class="text-ewhite phone:text-3xs desktop:text-xs font-trap-regular text-shadow-epurple">With VScode we have developped our entire website using speciafically view.js and as a supabase database <br/> <br/>
            The Ligo language allowed us to understand how linked the Tezos cryptocurrency to our project</p>
        </div>

        <div class="desktop:-mt-16 flex justify-center col-span-1">
            <img src="/public/img/vs-code_ligo.png" alt="" class="desktop:h-[300px] desktop:flex hidden">
            <img src="/public/img/vs-code_ligo_phone.png" alt="" class="desktop:hidden flex">
        </div>
    </section>

    <section class="grid desktop:grid-cols-2 phone:grid-cols-1 mx-10 relative mt-20 mb-20">

        <div class="desktop:-mt-16 justify-center col-span-1 desktop:flex hidden">
            <img src="/public/img/opie.png" alt="" class="desktop:h-[500px]">
        </div>

        <div class="col-span-1">
            <h2 class="text-ewhite text-center phone:text-xs desktop:text-base  font-audiowide text-shadow-epink mb-4">The association</h2>
            <p class="text-ewhite phone:text-3xs desktop:text-xs font-trap-regular text-shadow-epurple">After some time to think about the association to wich we give 2% of each NFT resale, we chose OPIE. The "Office pour les insectes et leur environnement" is a French association created in 1969. It gathers amateur and professionnal naturalists by acting for the entomological knowledge, the protection of the environnements and the sensitization of all the public to the world of the insects. <br /> <br />
                This choice of association is the most appropriate for our project. It goes hand in hand with our identity psotioned on insects. Thus, by investing in our NFT, you also participate in the protection of their environment.</p>
        </div>

        <div class="flex justify-center">
            <img src="/public/img/opie.png" alt="" class="desktop:hidden flex col-span-1 w-1/2">
        </div>
    </section>

    
</template>

<style scoped>

.text-shadow-eblue {
    text-shadow: #25C6E5 1px 0 10px;
}
.text-shadow-epurple {
    text-shadow: #61066D 1px 0 10px;
}

.text-shadow-ewhite {
    text-shadow: #FFFFFF 1px 0 10px;
}

.text-shadow-epink {
    text-shadow: #E8088F 1px 0 3px;
}

</style>

<script setup>
import carouselDesk from '../components/carouselTeam-deskstop.vue'
import carouselPhone from '../components/carouselTeam-phone.vue'
</script>