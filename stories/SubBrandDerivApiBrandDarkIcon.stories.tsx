import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivApiBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivApiBrandDarkIcon',
  component: SubBrandDerivApiBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivApiBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivApiBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
