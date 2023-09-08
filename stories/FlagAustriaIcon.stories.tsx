import type { Meta, StoryObj } from '@storybook/react';

import { FlagAustriaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagAustriaIcon',
  component: FlagAustriaIcon,
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
} satisfies Meta<typeof FlagAustriaIcon>;

export default meta;

type Story = StoryObj<typeof FlagAustriaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
