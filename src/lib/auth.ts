import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@/lib/db";
import Yandex from "next-auth/providers/yandex";
import TwitchProvider from "next-auth/providers/twitch";


export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: 'gfsjhdklfkwo4i3jbnkmdfs0dfmsidf3njfad_dfs42/',
    strategy: 'jwt',
    pages: {
        error: '/',
    },
    providers: [
        TwitchProvider({
            clientId: 'h5ib1iu0whkr74zcgkmp7ebly1def4',
            clientSecret: 'bjba73h11wnpdeusupf3nawjn1sdgz',
        }),
        Yandex({
            clientId: '309a180c252b44eba3f747cc2dfcc7f7',
            clientSecret: 'a7d7e810b50141d0833cd11672458eb7'
        })
    ]
}