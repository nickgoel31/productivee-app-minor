"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { ScrollArea } from '@/components/ui/scroll-area'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

    const [cards, setCards] = useState(DEFAULT_CARDS);


  return (
    <ScrollArea className='h-full bg-red-800 w-full pr-10 '>
        <div className='h-full w-full'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit excepturi, error debitis alias fugit dolore quam. Qui deserunt iste vero exercitationem velit non, animi rem quis necessitatibus, aut voluptate veritatis doloribus amet dolorum modi saepe accusantium, quisquam vitae commodi molestias illum minima nulla nisi quia. Molestiae magnam assumenda ullam! A possimus ipsam porro exercitationem provident aut, architecto dolorum nihil doloremque cupiditate deserunt eum eos minus corrupti quaerat quisquam tenetur est vitae, amet quas officia. Tempora, consectetur nisi? Perferendis iusto veritatis perspiciatis cumque officia. Totam explicabo aliquid placeat cupiditate quasi consectetur fugiat, odit, non architecto officia iste officiis tempore quia aperiam accusantium veritatis voluptatum repudiandae, sapiente nobis nesciunt. Dolorem sequi exercitationem consectetur eum error dolore, debitis a molestiae saepe. Possimus aspernatur, sed, recusandae, magni earum ipsam at facere cum inventore laborum tenetur qui. Facere quasi dolores praesentium, id incidunt nobis reprehenderit quia maiores repudiandae ex velit! Eos, fuga recusandae doloremque nostrum voluptates facilis aut error excepturi adipisci maxime. Architecto deleniti quam officiis voluptas accusamus ullam amet debitis, neque excepturi ducimus placeat corporis veritatis quae accusantium, laborum rerum quibusdam magni atque? Sunt possimus necessitatibus quia quod, facilis iste magni ea sit id non veniam voluptatibus beatae itaque quidem iusto vitae, impedit officiis aperiam a dolore deserunt delectus? Quidem dolorem minus, sunt ab molestias fugit quis necessitatibus a excepturi ut, iusto atque? Consectetur, fugit nisi voluptatibus modi commodi, inventore excepturi quaerat mollitia cupiditate consequatur ipsam, quisquam et perferendis animi quae! Sint laudantium repellat ad reiciendis cupiditate dolorem, eum iure qui quisquam ullam similique ipsam accusamus nam! Ullam, facilis quo illum a magni excepturi maiores? Cumque officia omnis odio nisi culpa! Veniam quia sit, iure quas harum nobis alias minima maiores animi corrupti magni totam et minus qui? Totam cum, nesciunt, tempora odit veniam eligendi perferendis ut adipisci commodi dolor harum blanditiis, earum iusto. Soluta optio quidem et exercitationem accusantium obcaecati neque explicabo. Ullam et asperiores quo optio sit aliquam excepturi? Veniam iusto impedit sunt minus. Odio aliquam harum nemo explicabo commodi officiis dolor optio rem voluptates rerum dignissimos pariatur alias eius sed, atque magnam dolorem quod repellendus quam, quos incidunt blanditiis ut et ipsum. Officiis, quisquam. Iste autem laudantium pariatur. Dicta, dolore? Aut quibusdam officia placeat ipsam aperiam odio facilis totam autem recusandae voluptatum minus enim exercitationem tempore, necessitatibus id quas pariatur labore architecto eum velit reiciendis consequatur blanditiis reprehenderit. Reprehenderit unde iusto ullam. Ullam quas corrupti a adipisci repellat, quis autem provident amet reprehenderit. Rem, nisi praesentium quibusdam eos blanditiis unde repudiandae, autem iusto reprehenderit sint placeat incidunt quo eveniet est amet ullam. Impedit, alias sit. Dolore impedit eveniet molestiae voluptate saepe delectus quisquam minima illum expedita quaerat, laudantium voluptates optio aspernatur ea vero voluptatum dignissimos deserunt laboriosam, architecto quis. Vel voluptate iure necessitatibus veritatis, ducimus in incidunt earum nam tenetur reprehenderit est culpa ipsum tempore fuga dicta blanditiis dolore consequatur placeat quas. Eveniet, esse veritatis deleniti eius aspernatur nostrum ex qui dolorem provident! Exercitationem facere provident esse! Adipisci dolor eaque accusamus qui maxime quas voluptas enim hic ipsa nam ipsum omnis accusantium, rem nulla est ad necessitatibus mollitia incidunt ex delectus temporibus reprehenderit. Praesentium ipsa unde consequatur! Vel dolorum enim, impedit dicta placeat aut? Eaque molestias molestiae tempore officia placeat, ipsa nobis, ipsam assumenda quod, ea dolorem. Esse explicabo dolorem, veniam veritatis voluptatum non harum ipsum laudantium rerum aliquid iure, in officia, maxime iusto consequuntur nihil deleniti tenetur cum. Numquam aliquid pariatur maiores mollitia expedita, vel voluptates fugiat! Cum non atque dolores doloribus repellat dolorem pariatur architecto veniam provident perspiciatis, deleniti cumque a consequatur ipsum hic et doloremque, distinctio reprehenderit ut, rem adipisci ullam modi! Natus non iure id, mollitia nulla recusandae voluptatum incidunt dolores deserunt et nihil, nisi quasi magni blanditiis cum aspernatur earum cupiditate aut. Similique obcaecati maxime illum tempora distinctio officia modi, reprehenderit quisquam sint, tempore laboriosam nam veritatis, labore laborum ab consequuntur vitae! Facilis recusandae soluta nisi cupiditate nobis ipsum sit quia non aliquid sunt? Assumenda quo odio ex, necessitatibus odit reiciendis? Dignissimos omnis dolores inventore soluta, ipsam laborum commodi hic? Iure, et sapiente ducimus molestias dolorem animi ab explicabo voluptate eos aperiam unde quaerat error laboriosam officia nisi magni omnis debitis fugit placeat quidem vitae id similique ipsum earum? Exercitationem facere sed quia porro, voluptatibus et esse ab dolores sequi blanditiis voluptas in deserunt iusto accusamus quasi culpa, sunt dicta modi a natus eveniet eligendi alias labore! Molestias tempore ea magnam obcaecati quisquam praesentium eligendi amet, voluptatum, cumque mollitia illum quis inventore. Illum minima odio unde et dolor provident quisquam quia iure nostrum quibusdam sunt quod placeat, fugit laboriosam, in repudiandae quo quos dicta. Ipsam sit illum modi omnis, eius, id, odit est corporis beatae nobis asperiores nulla cupiditate tempora sint sunt laudantium ipsum ad? Explicabo incidunt, commodi necessitatibus atque doloremque, eveniet pariatur assumenda iure, quibusdam ipsum placeat ex ducimus corrupti id tenetur vero porro nihil ratione harum ab mollitia voluptate. Autem blanditiis minus quidem, quam vel quaerat, saepe accusamus sed possimus nam sit ad iure corporis perspiciatis commodi harum ratione explicabo doloribus deleniti distinctio. Nam nobis itaque eius ipsam tempora iure possimus temporibus id dignissimos labore deleniti beatae rem officia vero iste consequuntur velit perspiciatis sunt sit, vel hic exercitationem? Animi omnis quis labore perspiciatis impedit nam, sunt eius aperiam nobis soluta quidem, vero aliquid! Eos libero illo temporibus ipsa, in, ex cum totam earum consectetur magnam veniam, labore accusamus? Error voluptatem numquam ipsa libero quibusdam magnam quis neque quo. Ducimus, nesciunt quidem, asperiores dolorem quo pariatur tempore nam excepturi labore aperiam quos earum. Fuga incidunt molestiae a, ad debitis et, nesciunt odio perspiciatis distinctio totam dolorem omnis, voluptatibus officia nisi veritatis quo molestias facilis. Eveniet iure adipisci nihil. Aliquid temporibus voluptatem consequuntur. Ipsum vero ipsam asperiores nihil. Dicta cumque vitae cum ipsum deleniti minima ipsam nisi autem quam nostrum modi provident quo, fugiat obcaecati et, omnis numquam dignissimos eos voluptates? Ex optio, porro ullam labore doloremque nemo inventore, deleniti dolor tenetur nihil quod ab omnis, beatae reiciendis eius nesciunt vel deserunt molestias veniam voluptatem repellat blanditiis consectetur perspiciatis cupiditate! Laudantium aliquam expedita esse!</h1>
        </div>
    </ScrollArea>
  )
}

export default KanbanPage



const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];