import * as should from "should";
import { removeDecoration } from "./test_helpers";

import {
    AddressSpace,
    generateAddressSpace
} from "node-opcua-address-space";
import { nodesets } from "node-opcua-nodesets";
import { displayNodeElement } from "..";


const describe = require("node-opcua-leak-detector").describeWithLeakDetector;
describe("displayNodeElement", () => {

    let addressSpace: AddressSpace;

    before(async () => {
        addressSpace = AddressSpace.create();

        const xmlFiles = [
            nodesets.standard,
            nodesets.di
        ]
        await generateAddressSpace(addressSpace, xmlFiles);
    });

    after(() => {
        addressSpace.dispose();
    });


    it("displayNodeElement", () => {

        displayNodeElement(addressSpace.rootFolder);

        const str1 = displayNodeElement(addressSpace.rootFolder.objects.server);


        removeDecoration(str1).should.eql(`┌────────────────┬──────────────┬──────────────────────────┬───────────────┬─────────────────────────┬───────────────────────────────────────┬───────┐
│ ReferenceType  │ NodeId       │ BrowseName               │ ModellingRule │ TypeDefinition          │ DataType                              │ Value │
├────────────────┼──────────────┴──────────────────────────┴───────────────┴─────────────────────────┴───────────────────────────────────────┴───────┤
│ BrowseName:    │ Server                                                                                                                            │
├────────────────┼──────────────┬──────────────────────────┬───────────────┬─────────────────────────┬───────────────────────────────────────┬───────┤
│ HasProperty Ⓥ  │ ns=0;i=2254  │ ServerArray              │               │ PropertyType            │ String                                │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasProperty Ⓥ  │ ns=0;i=2255  │ NamespaceArray           │               │ PropertyType            │ String                                │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓥ │ ns=0;i=2256  │ ServerStatus             │               │ ServerStatusType        │ ServerStatusDataType(ExtensionObject) │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasProperty Ⓥ  │ ns=0;i=2267  │ ServiceLevel             │               │ PropertyType            │ Byte                                  │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasProperty Ⓥ  │ ns=0;i=2994  │ Auditing                 │               │ PropertyType            │ Boolean                               │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasProperty Ⓥ  │ ns=0;i=12885 │ EstimatedReturnTime      │               │ PropertyType            │ DateTime                              │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasProperty Ⓥ  │ ns=0;i=17634 │ LocalTime                │               │ PropertyType            │ TimeZoneDataType(ExtensionObject)     │ null  │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=2268  │ ServerCapabilities       │               │ ServerCapabilitiesType  │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=2274  │ ServerDiagnostics        │               │ ServerDiagnosticsType   │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=2295  │ VendorServerInfo         │               │ VendorServerInfoType    │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=2296  │ ServerRedundancy         │               │ ServerRedundancyType    │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=11715 │ Namespaces               │               │ NamespacesType          │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓜ │ ns=0;i=11492 │ GetMonitoredItems        │               │                         │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓜ │ ns=0;i=12873 │ ResendData               │               │                         │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓜ │ ns=0;i=12749 │ SetSubscriptionDurable   │               │                         │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓜ │ ns=0;i=12886 │ RequestServerStateChange │               │                         │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=17594 │ Dictionaries             │               │ DictionaryFolderType    │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=12637 │ ServerConfiguration      │               │ ServerConfigurationType │                                       │       │
├────────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────────────┼───────────────────────────────────────┼───────┤
│ HasComponent Ⓞ │ ns=0;i=14443 │ PublishSubscribe         │               │ PublishSubscribeType    │                                       │       │
└────────────────┴──────────────┴──────────────────────────┴───────────────┴─────────────────────────┴───────────────────────────────────────┴───────┘`)

    });
});