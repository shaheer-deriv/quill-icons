import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLanguageRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLanguageRegularIcon',
  component: StandaloneLanguageRegularIcon,
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
} satisfies Meta<typeof StandaloneLanguageRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLanguageRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
