import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneQrcodeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneQrcodeRegularIcon',
  component: StandaloneQrcodeRegularIcon,
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
} satisfies Meta<typeof StandaloneQrcodeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneQrcodeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
