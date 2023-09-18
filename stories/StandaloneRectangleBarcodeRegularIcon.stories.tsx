import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRectangleBarcodeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRectangleBarcodeRegularIcon',
  component: StandaloneRectangleBarcodeRegularIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneRectangleBarcodeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRectangleBarcodeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
