# First-visitor design review — 2026-10-03

Scope: home, property discovery, property detail, design brief, investment tools, menus, assistant, guest dialogs and responsive navigation. Compared the visible experience with the supplied RealNest Dribbble study and Elyse cinematic direction. Reviewed rendering in the managed browser at desktop 1280/1363px, tablet 768px, and phone 320/360/390px. Narrow views used an actual-app same-origin iframe harness, removed before publication.

## Findings and corrections

| Severity / location | Before | After | Why |
| --- | --- | --- | --- |
| Medium · home / global type | Synthetic italic, multiple introductory labels and competing slogans | Upright real Cormorant face, one eyebrow, clear headline and scroll action | Restores the restrained architectural direction |
| Medium · featured catalogue | One card/photo dominated, uneven title sizing | Equal columns, image ratio and title hierarchy | Makes comparison predictable |
| Medium · cards / lower sections | Repetitive decorative rules and metadata dividers | Soft fact capsules and spacing-based grouping | Matches the mobile reference and reduces template-like decoration |
| Medium · mobile hero | Overlarge type and awkward action wrapping | Responsive type scale, shorter opening and unbroken action labels | Keeps the opening readable at 320px |
| Medium · design choices | Repeated generic icons | Distinct home, roof, kitchen and boundary sketches; pool waves | Gives each choice a meaningful visual cue |
| Medium · brief | Disclosure lacked a visible cue; narrow save action | Chevron, white summary surface and full-width phone save action | Makes the saved choices discoverable |
| Medium · guest inspection / renovation | Details or uploads appeared before required sign-in | Property context and sign-in explanation first; comparison only with a photo | Avoids wasted entry and misleading controls |
| High · regional map | Embedded map failed with a WebGL error in the phone browser | Lazy 2D raster map, proper attribution, large zoom controls, retry fallback | Restores usable regional orientation without fabricated property pins |
| Medium · discovery filters | Some active constraints were hidden; closing filters was unclear | Removable type/bedroom chips, Close filters and Show results controls | Makes filter state and recovery explicit |
| Medium · empty results | Generic heading and reset action ran into description | Specific no-match title and separated reset action | Makes recovery obvious |
| Medium · navigation / headings | Menu autofocus was unclear; investment title used h2 | Focus first menu destination, restore trigger on close, focus main on navigation, page h1 | Improves orientation for keyboard users |
| Medium · persistence / copy | Save state could change before storage succeeded; area copy implied unavailable information | Set saved state after successful storage; saved-brief availability wording; independent area research instruction | Keeps claims aligned with implemented behavior |
| Medium · motion | Mostly static sections | Staged opening, one-time scroll reveals, page/step transitions and subtle interaction feedback | Adds life and hierarchy without perpetual movement |

## Verification

- Visually inspected desktop opening, equal collection cards, design workspace, lower brief/outdoors and navigation. The three featured cards measured equal widths (371.94px at 1280px).
- Phone opening, catalogue, property detail, guest inspection, filters, assistant, map, menu and design controls inspected. At 320px discovery, document width and scroll width both measured 320px. Roof and kitchen choices fit without clipping.
- Combined Abuja + low-price filtering returned no matches; closing filters and resetting restored all five sample properties. Assistant searches returned zero for an unmatched budget and one Abuja duplex for matching city, budget and five bedrooms.
- Replacement map tiles visibly rendered in the phone browser where the previous map failed.
- Menu focused Find a property on opening and returned focus to Open menu on Escape.
- All four design sections were opened; saving displayed Saved brief available, and expanding the brief displayed the selected choices. Saved choices were restored during the earlier pass.
- Tablet calculator layout inspected. A 30-million principal over 20 years with 0% interest produced 125,000 naira monthly, confirming the zero-interest branch.
- Guest renovation clearly explains sign-in before upload and identifies architectural inspiration.
- Animations were observed during transitions and scroll. Reduced-motion and keyboard overrides were inspected in source; operating-system preference emulation was unavailable in this browser.
- TypeScript passed. Changed-file ESLint: zero errors, 13 existing architectural warnings for raw images and internal hash navigation. Production packaging is checked by the publication workflow.

## Motion policy

UI transitions use ease-out and 180–260ms. Marketing entrance uses a single 1.6-second architectural image settle and 600–650ms text/reveal transitions. Scroll reveals run once; there is no infinite bounce or automatic carousel. Keyboard navigation immediately reveals content. Reduced motion leaves every section visible and disables decorative motion. Focused content is never left transparent.

## Verdict and boundaries

Corrected the observed release-blocking map failure and the usability/design issues above. Ready for publication after the build succeeds. This is a detailed browser review, not certification of every possible device or account state. Real-device keyboard behavior, full screen-reader traversal, signed-in owner writes, offline map fallback and dark-mode rendering were not exercised. Backend access/persistence is preserved. Sample listings and photographs are illustrative; personalized image generation and verified listing pins are not connected. Inspection requests require agent confirmation. The temporary QA page is excluded from the published source.

## Repeat first-visitor review — evening pass

Reopened the public site and independently exercised discovery and Abuja filtering. Continued against the same source in a responsive review harness at 390px, 320px and 1280px.

- Found that changing a saved roof choice retained a misleading saved label. The brief now compares all current choices with the last successfully saved snapshot. Verified Hip roof selection changes status to Unsaved changes, saving changes it to Saved on this device, and restoration retains the saved choice.
- Sample listings offered real inspection requests. They now explain that sample properties cannot be inspected, without asking for personal details or sign-in, and provide a design-brief handoff instead. Owner-submitted property inspection forms remain available.
- A property-to-design handoff retained the previously open Outdoors section. Handoffs now start at Plot & layout and preserve the property's city and area.
- Inspected the 320px design preview, outdoor choices, summary and save action. Body clientWidth and scrollWidth both measured 320px.
- Phone menu opened with focus on Find a property; Investment tools navigation closed the menu.
- Desktop map tiles rendered; guest property save opened the sign-in explanation without claiming a successful save.
- Zero-interest repayment on a 30-million principal over 20 years produced 125,000 monthly.

Boundaries remain: signed-in owner writes and physical-device testing were not performed. The catalogue contains illustrative sample properties; personalized image generation remains unconnected.

## Fresh visitor pass — 2026-10-03 evening

Started from the opening at 390px and used visible navigation: Explore, Homes, Filters, Abuja, Show one place, duplex detail, Back to properties, and Saved. The filtered return retained the Abuja and Homes selection. The one-result button used correct singular text. Property detail disclosed sample status and unavailable inspections. Main content received focus when returning to discovery.

Found and corrected three additional issues:

| Before | After | Why |
| --- | --- | --- |
| Homes category selected while filter panel showed All properties | Category is derived from the single property-type state | Makes all selection controls agree and removes duplicate filtering state |
| Signed-out Saved page offered Map, Filters and categories for an empty private collection | Shows a focused sign-in empty state with an Explore properties escape | Removes unusable controls and clarifies the next action |
| Preview alt text could describe a two-storey photo as a bungalow | Alt text describes the actual reference; caption says choices update the brief, not the image | Prevents the reference from appearing to be a generated result |

The browser returned a policy block during preview reload after these source corrections. No workaround was attempted. Therefore the fresh desktop pass and rendered post-correction phone recheck are incomplete; the earlier desktop review remains historical evidence only. TypeScript, lint and production build provide implementation checks for this patch. These are not substitutes for the unfinished rendered review.


## Resumed first-visitor review — 2026-10-04

Opened the actual app in the supported review browser. Walked visible controls before checking implementation: desktop opening → Homes → property detail → sample inspection explanation → design handoff → changed roof → save → unsaved changes. Repeated phone opening → Explore → Homes → Filters → Abuja → one result → property detail → Back → Saved → sign-in explanation → Design. Reviewed interior/outdoor controls, menu, investment, regional map, assistant and empty-result recovery at 320, 390, 768 and 1280 CSS pixels (responsive iframe); also inspected the normal 1349px browser.

Reopened the saved original Real Nest board, Elyse opening and Digital Bunch configurator imagery from the earlier design study. Retained the image-led opening, serif display/sans-serif controls, inset photographs, rounded fact capsules and grouped choices. These are visual references, not proof of live behaviour or exact font identity.

### Ranked corrections

| Severity / owner | Location | Before | After | Why |
| --- | --- | --- | --- | --- |
| High · layout | app/globals.css:34 | Absolutely positioned phone homepage header remained over hero actions while the inner site scrolled | The mobile scroll area now establishes the header's containing block | Header scrolls away with the architecture instead of covering actions |
| High · layout | app/page.tsx:76; app/globals.css:58–59 | Expanded Close filters button ended at x=331.44 on a 320px viewport | Wrapping action row and compact narrow list/map controls | Closing filters stays visible and reachable |
| Medium · typography/layout | app/globals.css:59 | Narrow opening search displayed both selections as All | Single-column search fields below 380px | Full selected values remain readable at the intended 16px input size |
| Medium · typography/layout | app/globals.css:59 | Four narrow section controls and three small option columns split Open-plan and reduced labels to 12–13px | Two columns for sections/options below 380px; 14px labels | Clear names, calmer alignment and more space per choice |
| Medium · colour/hierarchy | app/page.tsx:83 | Agent workspace was the filled primary action in the general visitor menu | Neutral outlined action alongside other secondary tools | The agent function no longer visually outranks discovery/design |
| Low · accessibility | app/page.tsx:79; app/globals.css:15 | Investment page jumped from h1 to calculator h3 | Calculator sections use h2 with preserved styling | Coherent heading outline without changing visual hierarchy |

### Coverage and evidence

- Accessibility: named controls inspected in AX tree; menu focuses Find a property; dialog Escape exercised; keyboard Tab from Interior focuses Outdoors with a visible perimeter; calculator heading outline corrected. Full screen-reader traversal and automated accessibility audit were not performed.
- Layout: screenshots inspected for opening, catalogue, property detail, Saved, sign-in dialog, all design sections, menu, assistant, investment and map. 320px design document width and scroll width both 320px. Post-fix Close filters fits within the 320px viewport. Phone header overlap visually rechecked after scrolling. 200% zoom and RTL mirror were not tested.
- Typography: computed real Cormorant 500 display headings; Albert Sans 400–600 controls; narrow section/choice labels 14px, select inputs 16px. Verified full opening search labels and readable narrow design labels. Existing photographic captions remain secondary at smaller sizes.
- Writing: inspected sample status, inspection limitations, reference-image explanation, saved/unsaved states, sign-in and no-match recovery. No claim that references change into generated designs.
- Colour: rendered assistant secondary text rgb(96,105,112) on white is 5.60:1; declared same text on chalk is 5.08:1; white on the rendered teal action rgb(37,75,89) is 9.42:1; primary ink on white is 15.16:1. These sampled pairs pass ordinary-text 4.5:1. All image-backed text, dark theme and forced colours were not exhaustively measured.
- UI/motion: witnessed staged phone opening, page/section transitions and scroll reveals during the walk. Existing reduced-motion guards and keyboard reveal override inspected in source. OS reduced-motion emulation, animation-panel slow replay and real-device behaviour were not tested.
- Functional recovery: Homes agrees with House filter on desktop and phone; Abuja result/detail/return preserves selection; saved roof restores and changing it marks Unsaved changes; map tiles render and zoom; assistant Abuja under 200m with 5 bedrooms produces one match; Abuja under 25m produces no matches; Reset restores all five samples. Zero-interest 30m/20-year loan shows 125,000 monthly.

Verdict: observed layout blockers corrected and rendered again. Review covers the public/guest visitor journeys described above. Signed-in owner writes, uploads and actual notifications/personalized generation remain outside verified coverage. Production checks are recorded below after completion. Temporary review harness is removed before publishing.


## October 4 visual refinement
Reopened Elyse and RealNest reference images. Rechecked desktop catalogue and design workspace, and embedded 320px/390px phone layouts. Hierarchy, serif/sans typography, card alignment, grouped choices, selection emphasis and spacing remain consistent in inspected views. Reference and lighting labels now measure 14px at 320px, with no horizontal body overflow. Explanatory preview text is consolidated below the image; sample-image and building-plan disclosures remain. Two reused catalogue photographs replaced with distinct reference assets, sourced from GIP Frankfurt and Real.co.za; these remain illustrative sample listings. Photographic saturation is reduced for a calmer palette. Existing entry/reveal and reduced-motion rules are retained; static reference images cannot prove an exact animation match. No physical device or signed-in testing is claimed.

## Secondary action underline correction — 4 October 2026

Reopened all seven embedded reference images from the saved design study, including RealNest and Elyse. The inspected screens use contained buttons and plain labels; no comparable blanket underlining of secondary actions is visible. The live Imagine my home underline was an explicit CSS text-decoration rule, not a missing icon. Replaced hero and shared secondary-action underlines with restrained outlined controls. No decorative icon or logo added. Kept labels and action handlers unchanged.


## Homepage motion update — 2026-10-04

Integrated the supplied ten-second exterior-to-interior walkthrough as a muted looping hero video, with still poster, playback/error fallback, accessible play/pause, offscreen/background pause and reduced-motion preference. Added only the requested middle inspiration section between featured properties and the design invitation: three new generated architecture concepts, continuously gliding duplicated track, pause control, hover pause, and static reduced-motion layout. Other routes and features remain unchanged.

Verification: TypeScript passed. Uploaded clip inspected at five points across its duration; 1280×720 H.264, optimized and stripped of audio for background playback. Preview service reported running, but browser connection failed and subsequent selection was blocked by browser policy. Fresh rendered desktop/mobile and autoplay verification unavailable this turn; no claim of a passed visual check.
