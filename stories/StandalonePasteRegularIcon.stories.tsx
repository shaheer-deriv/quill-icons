import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePasteRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePasteRegularIcon',
  component: StandalonePasteRegularIcon,
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
} satisfies Meta<typeof StandalonePasteRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePasteRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
