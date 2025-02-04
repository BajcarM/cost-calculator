import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { ListItem } from './ListItem'
import logo from '../../assets/logo.png'

export const PrintPdf = () => {
  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <Image
          src={logo}
          style={styles.logo}
        />
        <View style={[styles.section, styles.mtLarge]}>
          <Text style={styles.header1}>ORIENTAČNÍ ROZPOČET</Text>
          <Text style={styles.redSubheader}>
            ,,RENOVUJEME DOMOV PRO LEPŠÍ ŽIVOT’’
          </Text>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.column}>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>Michal Pelech</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>30.1.2025</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.header1}>OBLAST A</Text>
          <Text style={[styles.subheader, styles.mbSmall]}>
            (zateplení a výplň otovrů)
          </Text>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Střecha</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>250m²</Text>
            </View>
            <Text style={styles.text}>
              vata nebo foukaná / stříkaná izolace, záklop / bednění
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Půda</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>150m²</Text>
            </View>
            <Text style={styles.text}>
              vata nebo foukaná / stříkaná izolace
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Obálka</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>300m²</Text>
            </View>
            <Text style={styles.text}>
              lešení, polystyrén / vata, fasádní barva
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Stínění</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>25m²</Text>
            </View>
            <Text style={styles.text}>
              instalace elektrické / manuální předokení stínící techniky
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Okna</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>25m²</Text>
            </View>
            <Text style={styles.text}>
              demontáž, montáž, zednické zapravení
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Dveře</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>5m²</Text>
            </View>
            <Text style={styles.text}>
              demontáž, montáž, zednické zapravení
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.width70}>
              <Text style={styles.text}>Podlaha</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>150m²</Text>
            </View>
            <Text style={styles.text}>
              demontáž, montáž, zednické zapravení
            </Text>
          </View>
          <View style={[styles.row]}>
            <View style={styles.width70}>
              <Text style={styles.text}>Sklep</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>5m²</Text>
            </View>
            <Text style={styles.text}>lepící malta, polystyrén</Text>
          </View>
          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.width70}>
              <Text style={styles.text}>Ostatní</Text>
            </View>
            <View style={[styles.box, styles.width70]}>
              <Text style={[styles.text, styles.textCenter]}>5m²</Text>
            </View>
            <Text style={styles.text}>
              stěna nevytápěného prostoru - vata / polystyren
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.header2}>
              Dotace:{' '}
              <Text style={[styles.bigNumber, styles.bold]}>1 000 000,-</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.header1}>OBLAST C</Text>
          <Text style={[styles.subheader, styles.mbSmall]}>
            (energetické zdroje)
          </Text>
          <View style={styles.row}>
            <View style={styles.width100}>
              <Text style={styles.text}>Soláry</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>9,9 kWp, baterie 11,6 kWh</Text>
            </View>
            <View>
              <Text style={styles.text}>
                instalace a připojení k distribuci
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.width100}>
              <Text style={styles.text}>Vyápění</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>t. čerpadlo vzduch-voda</Text>
            </View>
            <View>
              <Text style={styles.text}>instalace a uvedení do provozu</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.width100}>
              <Text style={styles.text}>Rekuperace vody</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>1 jednotka</Text>
            </View>
            <View>
              <Text style={styles.text}>instalace a uvedení do provozu</Text>
            </View>
          </View>
          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.width100}>
              <Text style={styles.text}>Rekuperace vzduchu</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>4 decentrání jednotky</Text>
            </View>
            <View>
              <Text style={styles.text}>instalace a uvedení do provozu</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.header2}>
              Dotace:{' '}
              <Text style={[styles.bigNumber, styles.bold]}>400 000,-</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.header1}>OBLAST D</Text>
          <Text style={[styles.subheader, styles.mbSmall]}>
            (dílčí opatření)
          </Text>
          <View style={styles.row}>
            <View style={styles.width100}>
              <Text style={styles.text}>Dešťovka</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>retenční nádrž 5m³</Text>
            </View>
            <View>
              <Text style={styles.text}>výkop, usazení nádrže</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.width100}>
              <Text style={styles.text}>Nabíjecí stanice</Text>
            </View>
            <View
              style={[styles.box, styles.width200, styles.paddingInlineSmall]}
            >
              <Text style={[styles.text]}>wallbox 11kW</Text>
            </View>
            <View>
              <Text style={styles.text}>instalace a uvedení do provozu</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.header1, styles.mbMedium]}>BONUSY</Text>
          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.column}>
              <Text style={styles.header2}>OBEC</Text>

              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>100 000,-</Text>
              </View>
            </View>

            <View style={styles.column}>
              <Text style={styles.header2}>DĚTI</Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>100 000,-</Text>
              </View>
            </View>

            <View style={styles.column}>
              <Text style={styles.header2}>KOMBINACE</Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>100 000,-</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.header2}>
              Dotace:{' '}
              <Text style={[styles.bigNumber, styles.bold]}>300 000,-</Text>
            </Text>
          </View>
        </View>
      </Page>

      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.section}>
          <Text style={[styles.header1, styles.mbSmall]}>ROZPOČET</Text>
          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.column}>
              <Text style={styles.header2}>Celková dotace</Text>
              <Text style={styles.subheader}>
                (součet všech oblastí a bonusů)
              </Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>1 700 000,-</Text>
              </View>
            </View>

            <View style={styles.column}>
              <Text style={styles.header2}>Předběžná cena</Text>
              <Text style={styles.subheader}>
                (uvedené částky jsou s DPH a mohou se lišit)
              </Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>3 400 000,-</Text>
              </View>
            </View>
          </View>

          <View style={[styles.row, styles.mbMedium]}>
            <View style={styles.column}>
              <Text style={styles.header2}>Vlastní investice</Text>
              <Text style={styles.subheader}>
                (financování s valstních zdrojů nebo úvěru)
              </Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>1 700 000,-</Text>
              </View>
            </View>
            <View style={styles.column}>
              <Text style={styles.header2}>Měsíční investice</Text>
              <Text style={styles.subheader}>
                (při dotované úrokové sazbě 2,99% na 25 let)
              </Text>
              <View style={[styles.box, styles.paddingSmall]}>
                <Text style={styles.bigNumber}>3 435,-</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.header1, styles.mbSmall]}>PROCES</Text>
          <View style={[styles.box, styles.paddingMedium]}>
            <ListItem>
              <Text style={styles.text}>
                Předběžná kalkulace a návštěva obchodně-technickým poradcem
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>Schválení orientačního rozpočtu</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>Podpis smlouvy</Text>
            </ListItem>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.header1, styles.mbSmall]}>PLATBY</Text>
          <View style={[styles.box, styles.paddingMedium]}>
            <ListItem>
              <Text style={styles.text}>
                Platba č.1 je 50.000, která slouží jako záloha na dotační
                management, který stojí celkem 100.000,- a je splatná do 5 dnů
                od podpisu smlouvy. Druhá část je uznatelný náklad v celkové
                dotaci.
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Platba č.2 se účtuje tehdy, kdy Vám přijde dotace na účet,
                kterou budeme chtít zaslat jako zálohu za dílo. Následně se
                domluví termín a harmonogram realizace a začínáme s
                rekonstrukcí.
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Platba č.3 bude doplatek celé ceny díla z vlastních zdrojů či
                financování, který budeme účtovat ve chvíli, kdy se budeme
                blížit k půlce realizace (dle harmonogramu) a realizaci
                dokončujeme.
              </Text>
            </ListItem>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.header1, styles.mbSmall]}>
            DOTAČNÍ MANAGEMENT
          </Text>
          <View style={[styles.box, styles.paddingMedium]}>
            <ListItem>
              <Text style={styles.text}>Technické zaměření projektantem </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Projektová dokumentace původního a budoucího stavu
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>Upřesnění rozpočtu</Text>
            </ListItem>

            <ListItem>
              <Text style={styles.text}>Technická zpráva</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>Energetické hodnocení</Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Energetický šítek pro stávající a budoucí stav
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Vyřízení a podání žádosti na dotaci
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Vyhotovení zprávy technického odborného dozoru stavby po
                dokončení stavby pro účely dotace NZÚ
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.text}>
                Dokončení žádosti NZU po realizaci opatření (kontrola účetnictví
                k akci a doložení dalších potřebných dokumentů na fond) pro NZÚ
              </Text>
            </ListItem>
          </View>
        </View>
      </Page>
    </Document>
  )
}
