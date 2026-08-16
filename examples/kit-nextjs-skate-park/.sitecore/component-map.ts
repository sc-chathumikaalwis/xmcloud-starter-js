// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCServerWrapper, NextjsContentSdkComponent, FEaaSServerWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as Title from 'src/components/title/Title';
import * as StructuredData from 'src/components/structured-data/StructuredData';
import * as RowSplitter from 'src/components/row-splitter/RowSplitter';
import * as RichText from 'src/components/rich-text/RichText';
import * as Promo from 'src/components/promo/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as PageContent from 'src/components/page-content/PageContent';
import * as Navigation from 'src/components/navigation/Navigation';
import * as LinkList from 'src/components/link-list/LinkList';
import * as Image from 'src/components/image/Image';
import * as ContentBlock from 'src/components/content-block/ContentBlock';
import * as Container from 'src/components/container/Container';
import * as ColumnSplitter from 'src/components/column-splitter/ColumnSplitter';
import * as index from 'src/components/atoms/index';
import * as paragraphschema from 'src/components/atoms/paragraph/paragraph.schema';
import * as paragraph from 'src/components/atoms/paragraph/paragraph';
import * as paragraphrichtext from 'src/components/atoms/paragraph/paragraph-rich-text';
import * as numberschema from 'src/components/atoms/number/number.schema';
import * as number from 'src/components/atoms/number/number';
import * as imageschema from 'src/components/atoms/image/image.schema';
import * as image from 'src/components/atoms/image/image';
import * as headingschema from 'src/components/atoms/heading/heading.schema';
import * as heading from 'src/components/atoms/heading/heading';
import * as buttonschema from 'src/components/atoms/button/button.schema';
import * as button from 'src/components/atoms/button/button';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCServerWrapper],
  ['FEaaSWrapper', FEaaSServerWrapper],
  ['Form', { ...Form, componentType: 'client' }],
  ['Title', { ...Title }],
  ['StructuredData', { ...StructuredData }],
  ['RowSplitter', { ...RowSplitter }],
  ['RichText', { ...RichText }],
  ['Promo', { ...Promo }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['PageContent', { ...PageContent }],
  ['Navigation', { ...Navigation, componentType: 'client' }],
  ['LinkList', { ...LinkList }],
  ['Image', { ...Image }],
  ['ContentBlock', { ...ContentBlock, componentType: 'client' }],
  ['Container', { ...Container }],
  ['ColumnSplitter', { ...ColumnSplitter }],
  ['index', { ...index }],
  ['paragraph', { ...paragraphschema, ...paragraph }],
  ['paragraph-rich-text', { ...paragraphrichtext }],
  ['number', { ...numberschema, ...number }],
  ['image', { ...imageschema, ...image, componentType: 'client' }],
  ['heading', { ...headingschema, ...heading }],
  ['button', { ...buttonschema, ...button, componentType: 'client' }],
]);

export default componentMap;
